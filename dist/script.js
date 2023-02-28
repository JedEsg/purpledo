//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Front-End Script ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// menu open/close function
let open = 0;
let menu = document.getElementById("menu");


function toggleMenu() {
    if (open==0){
        menu.style.left = "0px";
        open = 1;
    }
    else {
        menu.style.left = "-400px";
        open = 0;

    }
}

// access quotable api to generate a quote on load and on click
let getQuote = () => {
    fetch('https://api.quotable.io/random?&maxLength=50')
    .then(response => response.json())
    .then(json => document.getElementById("quote").innerHTML = `<a onclick="getQuote()"><q>${json.content}</q><p>- ${json.author}</p></a>`)
    
}

getQuote();

// months and days in a week list
let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let weekdays = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday", "Saturday"];

// clock and clock greeting update every second
function updateClock(){
    const d = new Date();
    let min = d.getMinutes();
    let hr = d.getHours();

    if(hr > 12){
        hr = hr - 12;
    } else if(hr == 0){
        hr = 12
    }

    let weekday = d.getDay();

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let time = d.toLocaleTimeString('en-US');
    let mer = time.slice(-2);

    document.getElementById("hr").innerText = (hr).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("min").innerText = (min).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("mer").innerText = mer;
    document.getElementById("weekday").innerText = weekdays[weekday];
    document.getElementById("day").innerText = (day).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("month").innerText = months[month];
    document.getElementById("year").innerText = year;

    if (mer == "AM"){
        document.getElementById("greeting").innerText = "Good Morning";
        }
        else if (hr < 5){
        document.getElementById("greeting").innerText = "Good Afternoon";
        }
        else{
        document.getElementById("greeting").innerText = "Good Evening";
        }
}

// update clock every second
setTimeout(function(){document.getElementById("colon").innerText = ":"}, 1000);
setInterval(updateClock, 1000);

// add task toggle
document.addEventListener('click', e => {
    const isCreateContainer = e.target.matches('[data-create-grid]');
    const isCreateContainerElement = e.target.matches('[data-create-grid] > *');
    if (isCreateContainer || isCreateContainerElement) return;

    const isCreateBtn = e.target.matches('[data-create-btn]');
    const createGrid = document.getElementById('create-grid');
    const createBtn = document.getElementById('add-btn');
    if (!isCreateContainer && isCreateBtn){;
        createGrid.classList.toggle('create-grid-open');
        createBtn.classList.toggle('add-btn-active');
    } else {
        createGrid.classList.remove('create-grid-open');
        createBtn.classList.remove('add-btn-active');
    }
})