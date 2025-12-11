document.querySelector('.maincont').style.display = 'none';

setTimeout(() => {
    // document.querySelector('.bg-image').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.maincont').style.display = 'block';
}, 3000);

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
    if(!covidbtn.classList.contains('large')){
    covidbtn.classList.add('large');
    covidbtn.style.width = '80%';
    covidbtn.style.marginLeft = '5%';
    
    let url = "https://api.rootnet.in/covid19-in/stats/latest";
    async function fetchCovidData(){
    try{
    let response = await fetch(url);
    let data = await response.json();
    covidbtn.style.fontSize = '20px';
    covidbtn.innerHTML = `<strong>Total Active Cases :</strong> ${data.data.summary.confirmedCasesIndian} &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp<strong>Total Deaths :</strong> ${data.data.summary.deaths} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<strong>Total Recovered :</strong> ${data.data.summary.discharged}`;
    }catch(err){
        covidbtn.innerHTML = '<strong>My free API request trial has been ended</strong>';
    }
        
    }
    //Im made this as a fxn bcz await require async function.
    fetchCovidData();
    }else{
        covidbtn.classList.remove('large');
        covidbtn.style.width = '150px';
        covidbtn.style.marginLeft = '75%';
        covidbtn.innerText = "Covid Tracker";
        covidbtn.style.fontSize = '18px'
    }
    
});

    async function getNews(url, cn){
        let ul = document.querySelector(cn);
        try{
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("API returned status " + response.status);
        }
        let data = await response.json();
        for(let i=0; i<data.results.length; i++){
            let ele = document.createElement('li');
            let anch = document.createElement('a');
            anch.setAttribute('class', 'tooltip')
            let div = document.createElement('div');
            div.setAttribute('class', 'tooltiptext');
            div.innerText = data.results[i].description;
            anch.href = data.results[i].link;
            anch.textContent = data.results[i].title;
            div.appendChild(anch);
            ele.appendChild(anch);
            anch.appendChild(div);
            ul.appendChild(ele);
        }
        }
        catch(e){
            let ele = document.createElement('li');
            let anch = document.createElement('a');
            anch.setAttribute('class', 'tooltip')
            let div = document.createElement('div');
            div.setAttribute('class', 'tooltiptext');
            div.innerText = "You can check by making a free account on this website";
            anch.href = "https://newsdata.io/";
            anch.textContent = "My free API request trial has been ended";
            div.appendChild(anch);
            ele.appendChild(anch);
            anch.appendChild(div);
            ul.appendChild(ele);
        }
    }

getNews("https://newsdata.io/api/1/latest?apikey=pub_cee9aa46dc52437cbc0177296de630d8&q=the%20hindu", ".HUL");
getNews("https://newsdata.io/api/1/latest?apikey=pub_cee9aa46dc52437cbc0177296de630d8&q=The%20times%20of%20India", ".TUL");
getNews("https://newsdata.io/api/1/latest?apikey=pub_cee9aa46dc52437cbc0177296de630d8&q=The%20Economics%20Times", ".EUL");
getNews("https://newsdata.io/api/1/latest?apikey=pub_cee9aa46dc52437cbc0177296de630d8&q=The%20hindustan%20Times",".HTUL");
