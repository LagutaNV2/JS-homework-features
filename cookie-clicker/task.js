const imgCookie = document.getElementById('cookie');

let clickCounter = document.getElementById('clicker__counter');
let counter = Number(clickCounter.textContent);
let resizing = 25;

// задача на скорость кликов
const clickSpeed = document.getElementById('clicker__speed');
const startTime = new Date();
let currentTime = new Date();
let intervalTime = 0;
let averageClickSpeed = 0;

imgCookie.onclick = () => {

    imgCookie.width += resizing;
    imgCookie.height += resizing;
    resizing *= -1;

    counter += 1;
    clickCounter.textContent = counter;

    // задача на скорость кликов
    currentTime = new Date();
    intervalTime = (currentTime - startTime) / 1000;
    if (intervalTime > 0) {
        averageClickSpeed = (counter / intervalTime).toFixed(2);
        clickSpeed.textContent = averageClickSpeed;
    }
}
