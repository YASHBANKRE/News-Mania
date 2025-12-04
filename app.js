document.querySelector('.maincont').style.display = 'none';

setTimeout(() => {
    document.querySelector('.bg-image').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.maincont').style.display = 'block';
}, 2500);

function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerHTML = now.toLocaleString();
}

setInterval(updateDateTime, 1000); // update every second
updateDateTime();


let downbtn = document.getElementById('downloadbtn');
downbtn.addEventListener('click', () => {
     alert('Download feature coming soon!');
    // console.log('Download button clicked');
});

let covidbtn = document.getElementById('covidtracker');
covidbtn.addEventListener('click', () => {
    alert('There are total 2,21,67,763 active cases in the world currently.');
});

// let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=53a9124daa4a4ddaa142fd5bc80128f3";

// async function fetchNews(){
//     let response = await fetch(url);
//     let data = response.json();
//     let articles = data;
//     console.log(articles);
// }
// fetchNews();
