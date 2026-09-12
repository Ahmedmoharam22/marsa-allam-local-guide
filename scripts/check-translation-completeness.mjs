/**
 * check-translation-completeness.mjs
 *
 * Walks every tour object exported from `src/data/tours/index.ts` and
 * checks that every Record<Locale, string | string[]> field has a
 * non-empty value for every locale defined in i18n.locales.
 *
 * Usage:  npx tsx scripts/check-translation-completeness.mjs
 *    or:  npm run check-translations
 */

import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

// ---------- configuration ----------

const LOCALES = ["en", "de", "pl", "it", "cz", "ru", "fr", "nl", "hu"];

// Top-level LocalizedString fields on a Tour object
const STRING_FIELDS = [
  "title",
  "subtitle",
  "category",
  "duration",
  "departure",
  "overview",
  "paymentNote",
  "disclaimer",
];

// Top-level LocalizedList fields (Record<Locale, string[]>)
const LIST_FIELDS = [
  "highlights",
  "included",
  "notIncluded",
  "whatToBring",
];

// Nested LocalizedString fields inside `price`
const PRICE_STRING_FIELDS = ["unit"];

// Nested LocalizedString fields inside `childrenPolicy`
const CHILDREN_POLICY_FIELDS = ["under5", "from5to10", "over10"];

// ---------- helpers ----------

/**
 * Check a single LocalizedString or LocalizedList value.
 * Returns an array of { locale, reason } for each problem found.
 */
function checkLocalized(value, fieldPath, tourId) {
  const issues = [];
  if (value == null || typeof value !== "object") return issues;

  for (const locale of LOCALES) {
    const v = value[locale];
    if (v === undefined) {
      issues.push({ tourId, field: fieldPath, locale, reason: "missing" });
    } else if (Array.isArray(v)) {
      if (v.length === 0) {
        issues.push({ tourId, field: fieldPath, locale, reason: "empty array" });
      } else if (v.some((s) => typeof s !== "string" || s.trim() === "")) {
        issues.push({
          tourId,
          field: fieldPath,
          locale,
          reason: "contains empty string(s)",
        });
      }
    } else if (typeof v === "string") {
      if (v.trim() === "") {
        issues.push({
          tourId,
          field: fieldPath,
          locale,
          reason: "empty string",
        });
      }
    }
  }
  return issues;
}

// ---------- main ----------

async function main() {
  // Dynamic import of tour data — tsx handles TS + path aliases
  const toursModule = await import("../src/data/tours/index.ts");
  const tours = toursModule.tours ?? toursModule.default ?? [];

  console.log(`\n🔍  Checking ${tours.length} tours across ${LOCALES.length} locales: [${LOCALES.join(", ")}]\n`);
  console.log("─".repeat(90));

  let totalIssues = 0;
  const issuesByTour = {};

  for (const tour of tours) {
    const tourId = tour.id || "(unknown)";
    const tourIssues = [];

    // 1. Top-level LocalizedString fields
    for (const field of STRING_FIELDS) {
      if (tour[field]) {
        tourIssues.push(...checkLocalized(tour[field], field, tourId));
      }
    }

    // 2. Top-level LocalizedList fields
    for (const field of LIST_FIELDS) {
      if (tour[field]) {
        tourIssues.push(...checkLocalized(tour[field], field, tourId));
      }
    }

    // 3. price.unit
    if (tour.price) {
      for (const pf of PRICE_STRING_FIELDS) {
        if (tour.price[pf]) {
          tourIssues.push(
            ...checkLocalized(tour.price[pf], `price.${pf}`, tourId)
          );
        }
      }
    }

    // 4. childrenPolicy sub-fields
    if (tour.childrenPolicy) {
      for (const cp of CHILDREN_POLICY_FIELDS) {
        if (tour.childrenPolicy[cp]) {
          tourIssues.push(
            ...checkLocalized(
              tour.childrenPolicy[cp],
              `childrenPolicy.${cp}`,
              tourId
            )
          );
        }
      }
    }

    // 5. itinerary steps
    if (Array.isArray(tour.itinerary)) {
      tour.itinerary.forEach((step, idx) => {
        if (step.title) {
          tourIssues.push(
            ...checkLocalized(
              step.title,
              `itinerary[${idx}].title`,
              tourId
            )
          );
        }
        if (step.description) {
          tourIssues.push(
            ...checkLocalized(
              step.description,
              `itinerary[${idx}].description`,
              tourId
            )
          );
        }
      });
    }

    if (tourIssues.length > 0) {
      issuesByTour[tourId] = tourIssues;
      totalIssues += tourIssues.length;
    }
  }

  // ---------- output ----------

  if (totalIssues === 0) {
    console.log("\n✅  All tours are fully translated across all locales!\n");
    process.exit(0);
  }

  for (const [tourId, issues] of Object.entries(issuesByTour)) {
    console.log(`\n❌  ${tourId}`);
    for (const { field, locale, reason } of issues) {
      console.log(`     ├─ ${field}  →  [${locale}] ${reason}`);
    }
  }

  console.log("\n" + "─".repeat(90));
  console.log(
    `\n📊  Summary: ${totalIssues} issue(s) found across ${Object.keys(issuesByTour).length} tour(s) out of ${tours.length} total.\n`
  );

  // Break down by locale
  const byLocale = {};
  for (const issues of Object.values(issuesByTour)) {
    for (const { locale } of issues) {
      byLocale[locale] = (byLocale[locale] || 0) + 1;
    }
  }
  console.log("  Issues per locale:");
  for (const locale of LOCALES) {
    if (byLocale[locale]) {
      console.log(`    ${locale}: ${byLocale[locale]} issue(s)`);
    }
  }
  console.log();

  process.exit(1);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(2);
});
