/** School year runs Aug 24 → May 31; summer is Jun 1 → Aug 23. */
const SCHOOL_YEAR_START = { month: 8, day: 24 }; // August 24
const SCHOOL_YEAR_END = { month: 5, day: 31 }; // May 31

const SUMMER_TAGS = ["swe intern", "fellow", "travelling"];
const SCHOOL_TAGS = ["studying @ cornell", "pm @ cornell appdev"];

function isSchoolYear(date: Date): boolean {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month > SCHOOL_YEAR_START.month) return true;
  if (month === SCHOOL_YEAR_START.month && day >= SCHOOL_YEAR_START.day)
    return true;
  if (month < SCHOOL_YEAR_END.month) return true;
  if (month === SCHOOL_YEAR_END.month && day <= SCHOOL_YEAR_END.day)
    return true;

  return false;
}

export function getCurrentlyTags(now = new Date()): string[] {
  return isSchoolYear(now) ? SCHOOL_TAGS : SUMMER_TAGS;
}
