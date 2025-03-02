
// Bar
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let getBar = weekday[d.getDay()];
let bar = document.getElementById("bar");
bar.innerText = getBar;

// Date
function dateToDay(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day} ${year}`;
}

let getDate = dateToDay(new Date());
let date = document.getElementById("date");
date.innerText = getDate;

// Time

function getTime(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    return `${hour}:${min}:${sec}`;
}

let time = getTime(new Date());






