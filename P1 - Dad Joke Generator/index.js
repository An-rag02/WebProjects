const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "n13z7/CuBouLURSLLLNuQg==43m6lXkTJWnudSPq";

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try{
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.innerText = "Get Another Joke";
    btnEl.disabled = false;
    } catch (error){
        console.log(error);
        jokeEl.innerText = "An error occured. Please try again later.";
        btnEl.innerText = "Get Another Joke";
        btnEl.disabled = false;
    }
    
}

btnEl.addEventListener('click', getJoke);