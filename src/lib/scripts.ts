import { DAYS, DATE_OPTIONS } from '../lib/settings';

export function makeDate(date: string) {
	return new Date(date.replace(/-/g, '/'));
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-us', DATE_OPTIONS);
}

export function dayFromDate(date: Date) {
	return DAYS[date.getDay()];
}

export function makeNewEvent() {
	return { where: '', when: '' };
}
