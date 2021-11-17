const days = document.getElementById("days"),
        hours = document.getElementById("hours"),
        mins = document.getElementById("mins"),
        seconds = document.getElementById("seconds");

const newYear = "1 Feb 2022";

function formatDay(day) {
    return day < 10 ? `0${day}` : day
}

function countdown() {
    const newYears = new Date(newYear);
    const currentDay = new Date();


    let totalSec = (newYears - currentDay) / 1000;

    let day = Math.floor((totalSec / 3600) / 24);
    let hour = Math.floor(totalSec / 3600) % 24;
    let min = Math.floor(totalSec / 60) % 60;
    let sec = Math.floor(totalSec % 60);

    days.innerHTML = formatDay(day);
    hours.innerHTML = formatDay(hour);
    mins.innerHTML = formatDay(min);
    seconds.innerHTML = formatDay(sec);

    console.log(day, hour, min, sec)
}

setInterval(countdown, 1000);