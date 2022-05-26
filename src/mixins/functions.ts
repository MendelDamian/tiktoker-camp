export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function customHash(data: string): number {
  let hash = 0;

  for (let i = 0; i < data.length; i++) {
    let char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return Math.abs(hash);
}

export function isName(char: string): boolean {
  return /^[A-Z][a-z]*$/.test(char);
}

export function isPhonenumber(number: string) {
  return /[0-9]{9}$/.test(number);
}

export function validEmail(str: string): boolean {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(str);
}
