
console.log("here api");

const newsKey ="e8cf524855c548afa31fc15f5d56cecb"

let searchWord="apple"
const newUrl =` https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${newsKey}`

let cat="health"
let catApi=`https://newsapi.org/v2/top-headlines?apiKey=${newsKey}&category=${cat}`

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
    <div class="card">
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
searchNews()

const ul=document.querySelector("ul");
let allPages=15;
function elem(allPages, page){
let li='';
let beforePages= page - 1;
let afterPages=page + 1;
let LiActive;
if(page >1){
  li +=`<li class="btn" onclick="elem(allPages, ${page-1})"><i class="fas fa-angle-left"></i></li>`;
}

for(let pageLength = beforePages; pageLength < afterPages; pageLength++){

if(pageLength > allPages){
  continue;
}
if(pageLength ==0){
  pageLength= pageLength +1;
}

if(page ==  pageLength){
  LiActive = 'active';
}else{
  LiActive ='';
}

  li +=`<li class="numb ${LiActive}" onclick="elem(allPages, ${pageLength})"><span>${pageLength}</span></li>`

}

if(page < allPages){
  li +=`<li class="btn"onclick="elem(allPages, ${page+1})"><i class="fas fa-angle-right"></i></li>`;
}
ul.innerHTML=li;
}
elem(allPages,2)
document.querySelector(".next").addEventListener("click" ,function () {
  

});