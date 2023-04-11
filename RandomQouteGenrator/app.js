let author = document.getElementById('author');
let btn = document.getElementById('btn');
let quote = document.getElementById('quote');


const url = "https://api.quotable.io/random"




function getQuote() {
    fetch(url).then(response => response.json())
    .then(data => {
        author.textContent = data.author;
        quote.textContent = `❝ ${data.content} ❞`;
    })
}

btn.addEventListener('click', getQuote)