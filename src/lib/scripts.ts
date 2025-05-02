export function formatDate(date: Date): string {
  const [year, month, day] = date
    .toISOString()
    .split('T')[0]
    .split('-')
    .map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  return utcDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function dayFromDate(date: Date): string {
  // Parse the date string directly to avoid timezone issues
  const [year, month, day] = date
    .toISOString()
    .split('T')[0]
    .split('-')
    .map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  return utcDate.toLocaleDateString('en-US', {
    weekday: 'short',
    timeZone: 'UTC',
  });
}
