import { DAYS, DATE_OPTIONS } from '../constants/settings';

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', DATE_OPTIONS);
}

export function dayFromDate(dateString: string): string {
	const date = new Date(dateString);
	return DAYS[date.getDay()];
}
