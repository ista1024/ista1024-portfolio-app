
export function sanitizeString(value: string | number | undefined) {
  // If value is falsy, return an empty string
  if (!value) {
    return "";
  }
  // If value does not have toString or a length, return an empty string
  if (!value?.toString() || value.toString().length === 0) {
    return "";
  }
  // If value is a number, return it as a string
  if (typeof value === 'number') {
    return value?.toString();
  }
  // Remove < and > 
  const sanitizedInput = value.replace(/[<>]/g, "") || "";
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
