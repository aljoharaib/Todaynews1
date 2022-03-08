console.log("here api");

const newsKey ="e8cf524855c548afa31fc15f5d56cecb"

const newUrl =` https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsKey}`

let cat="general"
let catApi=`https://newsapi.org/v2/top-headlines?apiKey=${newsKey}&category=${cat}`

let headings=document.querySelectorAll("#headings a");
for(let heading of headings){
    heading.addEventListener("click",(event) =>{
cat=event.target.id;
catApi=`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${newsKey}`

    })
}

fetch( catApi)
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
