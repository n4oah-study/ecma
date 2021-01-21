const url = new URL(import.meta.url);

console.log(url);
console.log(url.searchParams.get('any'));