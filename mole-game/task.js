document.addEventListener('DOMContentLoaded', function () {

    const holes = document.querySelectorAll('.hole');
    const countDead = document.getElementById('dead');
    const countLost = document.getElementById('lost');

    let countResult = 0;
    let countMiss = 0;

    function resetGame(message) {
        alert(message);
        countResult = 0;
        countMiss = 0;
        countDead.textContent = countResult;
        countLost.textContent = countMiss;
    }

    function checkClick(curentClick) {
        if (curentClick.target.classList.contains('hole_has-mole')) {
            countDead.textContent = ++ countResult;
            if (countResult === 10) {
                setTimeout(() => {
                resetGame('Победа! Вы победили кротов!');
                }, 1000);
            }
        } else {
            countLost.textContent = ++ countMiss;
            if (countMiss === 5) {
                setTimeout(() => {
                resetGame('Игра окончена! Вы проиграли.');
                }, 1000);
            }
        }
    }

    holes.forEach((hole) => {
        hole.addEventListener('click', checkClick);
    });
});
