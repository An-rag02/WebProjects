const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');

const apiURL = 'https://api.quotable.io/random';

async function generateQuote() {

    quoteEl.innerText = 'Updating...';
    authorEl.innerText = '';
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;

    try{
        const res = await fetch(apiURL);
        const data = await res.json();
        quoteEl.innerText = data.content;
        authorEl.innerText = ` ~${data.author}`;
        btnEl.innerText = 'Generate Another Quote';
    } catch(err) {
        console.log(err);
        quoteEl.innerHTML = 'Oops! Something went wrong';
        authorEl.innerHTML = '';
        btnEl.innerText = 'Try Again';
    }
    btnEl.disabled = false;
  

}

generateQuote();

btnEl.addEventListener('click', generateQuote);