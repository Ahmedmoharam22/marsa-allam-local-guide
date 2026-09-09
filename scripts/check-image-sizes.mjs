import fs from 'node:fs';
import path from 'node:path';
import imageSize from 'image-size';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const VALID_EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png']);

function getImagesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getImagesRecursively(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (VALID_EXTENSIONS.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function runAudit() {
  const imageFiles = getImagesRecursively(IMAGES_DIR);
  let totalImages = imageFiles.length;
  let belowThresholdCount = 0;

  for (const filePath of imageFiles) {
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    try {
      const buffer = fs.readFileSync(filePath);
      const sizeFn = typeof imageSize === 'function' ? imageSize : imageSize.imageSize || imageSize.default;
      const dimensions = sizeFn(buffer);
      const width = dimensions?.width || 0;
      if (width < 2000) {
        belowThresholdCount++;
        console.warn(`${relativePath} (${width}px wide) may look soft on large screens — verify source resolution before use`);
      }
    } catch (err) {
      console.warn(`Could not read dimensions for ${relativePath}: ${err.message}`);
    }
  }

  console.log(`\n${belowThresholdCount} of ${totalImages} images below 2000px`);
}

runAudit();
