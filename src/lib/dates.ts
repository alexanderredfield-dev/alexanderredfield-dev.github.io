// Turns a date into text like "November 6, 2026".
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Shorter version for lists, like "Nov 2026".
export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}
