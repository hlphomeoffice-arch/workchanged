export function formatEditorialDate(value: string) {
  const timestamp = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? Date.parse(`${value}T12:00:00Z`)
    : Date.parse(value);
  if (Number.isNaN(timestamp)) return value;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(timestamp);
}
