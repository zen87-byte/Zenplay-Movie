export function toAlphabetString(str: string): string {
  return str
    .replace(/[^a-zA-Z]/g, " ") // remove non-alphabet
    .replace(/\s+/g, " ") // reduce multiple whitespace
    .trim(); // remove leading or lagging whitespace
}

export function capitalizeString(str: string): string {
  return str
    .split(" ") //Split to single word
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize every single word
    .join(" "); // Concate array into single string
}
