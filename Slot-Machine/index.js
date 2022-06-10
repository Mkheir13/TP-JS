
let jetons = 500;
let money = document.getElementById('money').innerHTML = jetons + '$';

let items = [
    "casino.png",
    "cherry.png",
    "cherry.png",
    "diamond.png",
    "diamond.png",
    "lemon.png",
    "lemon.png",
];

function play(mise) {
    jetons -= mise;
    money = document.getElementById('money').innerHTML = jetons + '$';
    last_bet = document.getElementById('last_bet').innerHTML = '-' + mise + '$';

    let slot1 = Math.floor(Math.random() * items.length);
    let slot2 = Math.floor(Math.random() * items.length);
    let slot3 = Math.floor(Math.random() * items.length);

    document.querySelector("#slot1").src = items[slot1];
    document.querySelector("#slot2").src = items[slot2];
    document.querySelector("#slot3").src = items[slot3];

    result(slot1, slot2, slot3, mise);
    money_limit();
}

function result(slot1, slot2, slot3, mise) {
    let combination = [slot1, slot2, slot3];

    for (let i = 0; i < combination.length; i++) {
        if (combination[i] == 2) {
            combination[i] = 1;
        } else if (combination[i] == 4) {
            combination[i] = 3;
        } else if (combination[i] == 6) {
            combination[i] = 5;
        }
    }

    let diamond = 0;

    for (let i = 0; i < combination.length; i++) {
        if (combination[i] == 3) {
            diamond++;
        }
    }
    if (diamond == 1) {
        let one_diamond = mise * 0.5
        jetons += one_diamond;
        win = document.getElementById('win').innerHTML = '+' + one_diamond + '$';
        money = document.getElementById('money').innerHTML = jetons + '$';
    } else if (diamond == 2) {
        let two_diamond = mise * 1
        jetons += two_diamond;
        win = document.getElementById('win').innerHTML = '+' + two_diamond + '$';
        money = document.getElementById('money').innerHTML = jetons + '$';
    }

    if (combination[0] == combination[1] && combination[1] == combination[2]) {
        if (combination[0] == 0) {
            let casino_win = mise * 10;
            jetons += casino_win;
            win = document.getElementById('win').innerHTML = '+' + casino_win + '$';
            money = document.getElementById('money').innerHTML = jetons + '$';
        } else if (combination[0] == 1) {
            let cherry_win = mise * 1.5;
            jetons += cherry_win;
            win = document.getElementById('win').innerHTML = '+' + cherry_win + '$';
            money = document.getElementById('money').innerHTML = jetons + '$';
        } else if (combination[0] == 3) {
            let diamond_win = mise * 2.5;
            jetons += diamond_win;
            win = document.getElementById('win').innerHTML = '+' + diamond_win + '$';
            money = document.getElementById('money').innerHTML = jetons + '$';
        } else if (combination[0] == 5) {
            let lemon_win = mise * 1.25;
            jetons += lemon_win;
            win = document.getElementById('win').innerHTML = '+' + lemon_win + '$';
            money = document.getElementById('money').innerHTML = jetons + '$';
        }
    }
}

function money_limit() {
    if (jetons < 10) {
        document.getElementById('btn_ten').disabled = true;
        alert('Vous n\'avez plus assez de jetons pour miser');
    } else if (jetons < 50) {
        document.getElementById('btn_fifty').disabled = true;
    } else if (jetons < 200) {
        document.getElementById('btn_two_hundred').disabled = true;
    }
}






