
export function sanitizeString(value: string) {
  if (!value) {
    return "";
  }
  // Remove < and > 
  const sanitizedInput = value.replace(/[<>]/g, '');
  if (!sanitizedInput) {
    return "";
  }

  return sanitizedInput;
}

export function sanitizeNumber(value: string | number | undefined) {
  // If value is falsy, return 0
  if (!value) {
    return 0;
  }
  // If value is a number, return it
  if (typeof value === 'number') {
    return value;
  }
  // If value is not a string, return 0
  if (typeof value !== 'string') {
    return 0;
  }
  // If value is a string Remove non-numeric characters
  if (typeof value === 'string') {
    const sanitizedInput = value.replace(/[^0-9]/g, '');
    return Number(sanitizedInput) || 0;
  }
  // Return 0 if no other condition is met
  return 0;
}
