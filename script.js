function generateRandomString(length, string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
  return Array.from(crypto.getRandomValues(new Uint8Array(length))).map((n) => string[n % string.length]).join('')
}
while(true) {
  document.title = generateRandomString(64);
}
