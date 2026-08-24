let countA = 0;
let countB = 0;

const countAEl = document.getElementById("countA");
const countBEl = document.getElementById("countB");
const winnerEl = document.getElementById("winner");

const voteABtn = document.getElementById("voteA");
const voteBBtn = document.getElementById("voteB");
const resetBtn = document.getElementById("resetBtn");

function updateWinner() {
    if (countA > countB) {
        winnerEl.innerText = "A is winning";
    } else if (countB > countA) {
        winnerEl.innerText = "B is winning";
    } else if (countA > 0 && countA === countB) {
        winnerEl.innerText = "It's a Tie";
    } else {
        winnerEl.innerText = "No votes yet";
    }
}

voteABtn.addEventListener("click", () => {
    countA++;
    countAEl.innerText = countA;
    updateWinner();
});

voteBBtn.addEventListener("click", () => {
    countB++;
    countBEl.innerText = countB;
    updateWinner();
});

resetBtn.addEventListener("click", () => {
    countA = 0;
    countB = 0;
    countAEl.innerText = 0;
    countBEl.innerText = 0;
    updateWinner();
});
