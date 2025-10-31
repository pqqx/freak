function gen(length, string = "01") {
  return Array.from(crypto.getRandomValues(new Uint8Array(length))).map((n) => string[n % string.length]).join('')
}
while(true) {
  document.title = gen(64);
}
