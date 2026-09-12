import { Tour } from "@/types/tour";
import { cityTours } from "./city";
import { courses } from "./courses";
import { scubaTours } from "./scuba";
import { snorkelingTours } from "./snorkling";

export { cityTours, courses, scubaTours, snorkelingTours };

export const tours: Tour[] = [
  ...snorkelingTours,
  ...scubaTours,
  ...courses,
  ...cityTours,
];

export default tours;
