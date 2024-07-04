import { DAYS, DATE_OPTIONS } from '../lib/settings';

export function makeDate(date: string) {
  return new Date(date.replace(/-/g, '/'));
}

// `date` needs to be typed
export function formatDate(date: any) {
  return date.toLocaleDateString('en-us', DATE_OPTIONS);
}

export function dayFromDate(date: Date) {
  return DAYS[date.getDay()];
}
