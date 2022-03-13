
console.log("here api");

const newsKey ="e8cf524855c548afa31fc15f5d56cecb"

let searchWord="apple"
const newUrl =` https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${newsKey}`

let cat="health"
let catApi=`https://newsapi.org/v2/top-headlines?apiKey=${newsKey}&category=${cat}`
let page=1
let headings=document.querySelectorAll("#headings a");
for(let heading of headings){
    heading.addEventListener("click",(event) =>{
cat=event.target.id;
catApi=`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${newsKey}&page=${page}`
searchNews()  
})
}
function  searchNews() {
  

fetch(catApi)
.then(response => response.json())
.then(data => {
    console.log(data.articles)


document.getElementById("news").innerHTML = data.articles.map(news =>
    
    `
    <div class="col-md-6">
    <div class="card w-50% h-50%">
      <img src="${news.urlToImage}" class="card-img-top" style="height:200px" alt="...">
      <div class="card-body">
      <h2>${news.author}</h2>
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.description}</p>
        <a href="${news.url}" class="link">Continue reading</a>
      </div>
    </div>
  </div>
    
    `
    ).join('')
}

);
}
// search bar&btn
document.querySelector("#btn-search").addEventListener("click", function(){
  searchWord=document.querySelector("#news-search").value
  console.log("Enter");
console.log(searchWord);
catApi=` https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${newsKey}&page=${page}`
  searchNews();
});
// next
document.querySelector("#next").addEventListener("click", function(){
console.log("next here");
if(page == 5 ){
  console.log("its 5");
next.disabled = true;
console.log(disabled );
}
page++;
console.log(page);
catApi=`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${newsKey}&page=${page}` 
searchNews() 
});
// brev
document.querySelector("#prev").addEventListener("click", function(){
  console.log("prev here");
  if(page == 1 ){
    console.log("its p 5");
    prev.disabled = true;
console.log(disabled);
  }
  page--;
  console.log(page);
  catApi=`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${newsKey}&page=${page}`
  searchNews() 
  });
searchNews()

