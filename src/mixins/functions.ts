export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function validateUpperCaseOnlyOnBeginning(char: string, n: (number | undefined)): boolean {
  return /^[A-Z][a-z]*$/.test(char);
}

export function validateEmail(str: string, n: (number | undefined)): boolean {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(str);
}

export function validateStartsWithUpperCase(str: string, n: (number | undefined)): boolean {
  return /^[A-Z]/.test(str);
}

export function validateMinLength(str: string, n: (number | undefined)): boolean {
  return n === undefined || str.length >= n;
}

export function validateMaxLength(str: string, n: (number | undefined)): boolean {
  return n === undefined || str.length <= n;
}

export function validateLettersOnly(str: string, n: (number | undefined)): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

export function validateNumbersOnly(str: string, n: (number | undefined)): boolean {
  return /^\d+$/.test(str);
}

export function validateNonEmpty(str: string, n: (number | undefined)): boolean {
  return str.length > 0;
}
