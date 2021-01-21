const data = {
  article: {
    title: 'hello title'
  },
  article2: false
}

// before
const title1 = data && data.article && data.article.title;
console.log('title1', title1);

const title2 = data && data.article2 && data.article2.title;
console.log('title2', title2);

// after
const title10 = data?.article?.title;
console.log('title10', title10);

const title11 = data?.article2?.title;
console.log('title11', title11);