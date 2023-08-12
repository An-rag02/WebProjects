const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const apiKey = '8cfe476e98597ba81e60b7d4a5e1754961950574';
const emoji = [];

url = `https://emoji-api.com/emojis?access_key=${apiKey}`;


async function getEmoji() {

    try {

        let response = await fetch(url);
        let data = await response.json();
        for(let i=0; i< 1500; i++){
            emoji.push({name: data[i].unicodeName, emoji: data[i].character});
        }
        
    } catch (error) {
        console.log(error);
        btnEl.innerText = 'Try Again';
        emojiNameEl.innerText = 'Something went wrong';
    }
}

getEmoji();

btnEl.addEventListener('click', () => {
    let random = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[random].emoji;
    emojiNameEl.innerText = emoji[random].name;
});