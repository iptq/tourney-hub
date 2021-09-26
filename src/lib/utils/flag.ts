// stolen from https://github.com/thekelvinliu/country-code-emoji/blob/main/src/index.js
export function flag(cc: string) {
  const CC_REGEX = /^[a-z]{2}$/i;
  // const FLAG_LENGTH = 4;
  const OFFSET = 127397;

  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(
      `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
        type === "string" ? cc : type
      }' instead.`
    );
  }

  const codePoints = [...cc.toUpperCase()].map(
    (c) => c.codePointAt(0) + OFFSET
  );
  return String.fromCodePoint(...codePoints);
}
