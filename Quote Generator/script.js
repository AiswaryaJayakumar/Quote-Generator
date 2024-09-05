var text = document.querySelector(".text")
var author = document.querySelector(".author") 

var api = "https://api.quotable.io/random"

async function getquote() {
    var response = await fetch(api)
    var  data = await response.json()
    text.innerHTML = data.content
    author.innerHTML = data.author
}

getquote()

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + text.innerHTML + "----- by  " + author.innerHTML, "Tweet Window", "width=600, height=300")
}
