/**
 * Client-side sanitization utilities.
 *
 * Note: The primary XSS defence is React's automatic output escaping.
 * These helpers strip dangerous HTML/script patterns and enforce input
 * constraints before data is stored in Firestore (no SQL, so SQL-injection
 * risk is structural – Firestore is NoSQL – but we still strip common
 * injection payloads for defence-in-depth).
 */

// Characters and patterns that are dangerous in HTML / SQL / NoSQL contexts
const HTML_PATTERN = /<[^>]*>|javascript:/gi;
const SCRIPT_EVENT_PATTERN = /on\w+\s*=/gi;
const SQL_PATTERN = /(['";\\]|--|\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC|EXECUTE|CAST|CONVERT|DECLARE|XP_)\b)/gi;

/**
 * Strip dangerous patterns from a plain-text field.
 * - Removes HTML tags and javascript: URIs
 * - Removes inline event handlers (onclick=, onerror=, …)
 * - Removes SQL/NoSQL injection tokens
 * - Trims whitespace
 */
export function sanitizeText(value: string): string {
  return value
    .replace(HTML_PATTERN, '')
    .replace(SCRIPT_EVENT_PATTERN, '')
    .replace(SQL_PATTERN, '')
    .trim();
}

/**
 * Sanitize and validate an email address.
 * Returns an empty string if the value is not a valid email after sanitisation.
 */
export function sanitizeEmail(value: string): string {
  const cleaned = sanitizeText(value);
  // Basic RFC-5322-inspired check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(cleaned) ? cleaned : '';
}

/**
 * Sanitize a phone number – allow only digits, spaces, +, -, (, )
 */
export function sanitizePhone(value: string): string {
  return value.replace(/[^0-9\s\+\-\(\)]/g, '').trim();
}

/**
 * Sanitize a numeric budget string.
 * Strips any non-numeric / non-currency characters.
 */
export function sanitizeBudget(value: string): string {
  return value.replace(/[^0-9$,.\- ]/g, '').trim();
}
