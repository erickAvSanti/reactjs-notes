export function limitString(str: string, limit = 100) {
  const subs = str.substring(0, limit);
  if (subs.length == str.length) return str;
  return `${subs}...`;
}
