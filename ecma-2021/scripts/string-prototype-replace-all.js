// before1
const queryString1 = 'q=query+string+parameters';
const withSpaces1 = queryString1.replace(/\+/g, ' ');
console.log('withSpaces1', withSpaces1);

// before2
const queryString2 = 'q=query+string+parameters';
const withSpaces2 = queryString2.split('+').join(' ');
console.log('withSpaces2', withSpaces2);

// after
const queryString3 = 'q=query+string+parameters';
const withSpaces3 = queryString3.replaceAll('+', ' ');
console.log('withSpaces3', withSpaces3);