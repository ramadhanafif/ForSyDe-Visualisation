/**
 * Generates a random string of specified length using alphanumeric characters
 * @param length - The desired length of the random string
 * @returns A random alphanumeric string
 */
export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    // Use Math.random() for short, non-cryptographic strings
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
