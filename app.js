var jsdom = require("mocha-jsdom");
global.document = jsdom();

const apiKey = 'a45dc3f8668f470f9655fbb5943d9958';
const main = document.querySelector('main');

window.addEventListener('load',e =>{
    updateNews();
});

async function updateNews(){
  const res = await  fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);

  const json = await res.json;
  console.log(json);


  main.innerHTML = json.articles.map(createArticle).join('\n');

}

function createArticle(article){

    return `
    <div class="article">
     <a href = "${article.url}>
      <h2>${article.title}</h2>
       <img src= "${article.urlToImage}">
       <p>${article.description}</p>
     </a>
     </div>`;

}