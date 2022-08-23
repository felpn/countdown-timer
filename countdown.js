const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const merryChristmas = "25 Dec 2022";

function countdown() {
    const merryChristmasDate = new Date(merryChristmas);
    const currentDate = new Date();

    const totalSeconds = new Date(merryChristmasDate - currentDate) / 1000;

    const days = Math.floor (totalSeconds / 3600 / 24);
    const hours = Math.floor (totalSeconds / 3600) % 24;
    const mins = Math.floor (totalSeconds / 60) % 60;
    const seconds = Math.floor (totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}
countdown();

setInterval(countdown, 1000);