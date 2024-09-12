let t = document.getElementById('timer');  // = 59
let countLimit = Number(t.textContent); // = 59
let count = countLimit;                // =59

let time = new Date(count * 1000);

let newLink = document.getElementById('newLink');
// window.alert(newLink);

function startCountdown () { //как в демо - по кургу (смысл мне не ясен)

    let intervalId = setInterval(() => {

        time = new Date(count * 1000);

        t.textContent = time.toISOString().substr(11, 8);
        // t.textContent = time.toISOString();

        count--;

        if (count < -1) {
            clearInterval(intervalId);
            window.alert("Вы победили в конкурсе!");
            count = countLimit;

            newLink.click();

            startCountdown();
        }
    }, 100); //специально уменьшено для оперативности до 0.10 сек.
}

startCountdown();
