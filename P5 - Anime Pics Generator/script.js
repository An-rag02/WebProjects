const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

const url = 'https://api.catboys.com/img';


async function getAnime(){
    try{
        animeContainerEl.style.display = 'block';
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        animeNameEl.innerText = 'Updating...';
        animeImgEl.src = 'spinner.svg';
        const response = await fetch(url);
        const data = await response.json();
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
        btnEl.innerText = 'Get Another';
    } catch (error) {
        console.log(error);
        btnEl.innerText = 'Try Again';
        animeNameEl.innerText = 'Something Went Wrong';
    }
    btnEl.disabled = false;
}




btnEl.addEventListener('click', getAnime);