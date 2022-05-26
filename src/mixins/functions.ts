export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function validateName(char: string): boolean {
  return /^[A-Z][a-z]*$/.test(char);
}

export function validatePhoneNumber(number: string) {
  return /\d{9}$/.test(number);
}

export function validateEmail(str: string): boolean {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(str);
}
