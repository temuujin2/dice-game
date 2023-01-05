// let randomNumber1, randomNumber2;
// let randomDice, randomDice2;
// let randomDiceSource, randomDiceSource2;
// let dice1, dice2;

const button1 = document.getElementById("btn1").addEventListener("click", function() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomDice = "dice" + randomNumber1 + ".png";
    randomDiceSource = "./images/" + randomDice;
    dice1 = document.querySelectorAll("img")[0];
    dice1.setAttribute("src", randomDiceSource);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = `Тоглогч <span>1</span> хожлоо <i class="fa-solid fa-trophy"></i>`
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = `Тоглогч <span>2</span> хожлоо <i class="fa-solid fa-trophy"></i>`
    } else {
        document.querySelector("h1").innerHTML = `Хэн нь ч хожсонгүй <i class="fa-regular fa-face-laugh-beam"></i>`
    }
});
const button2 = document.getElementById("btn2").addEventListener("click", function() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    randomDice2 = "dice" + randomNumber2 + ".png";
    randomDiceSource2 = "./images/" + randomDice2;
    dice2 = document.querySelectorAll("img")[1];
    dice2.setAttribute("src", randomDiceSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = `Тоглогч <span>1</span> хожлоо <i class="fa-solid fa-trophy"></i>`
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = `Тоглогч <span>2</span> хожлоо <i class="fa-solid fa-trophy"></i>`
    } else {
        document.querySelector("h1").innerHTML = `Хэн нь ч хожсонгүй <i class="fa-solid fa-face-angry"></i>`
    }
});



// const button1 = document.getElementsByClassName("btn1");
// const button2 = document.getElementsByClassName("btn2");

// const randomNumber1 = Math.floor(Math.random()*6) +1;
// const randomDice = "dice" + randomNumber1 + ".png";
// const randomDiceSource = "./images/" + randomDice;
// const dice1 = document.querySelectorAll("img")[0];
// dice1.setAttribute("src", randomDiceSource);

// const randomNumber2 = Math.floor(Math.random()*6) +1;
// const randomDice2 = "dice" + randomNumber2 + ".png";
// const randomDiceSource2 = "./images/" + randomDice2;
// const dice2 = document.querySelectorAll("img")[1];
// dice2.setAttribute("src", randomDiceSource2);


// button1.addEventListener('click' () )
// for(let i = 0; i < randomNumber1.lenght; i++) {
//     button1[i].addEventListener("click", function (event) {
//         console.log(randomNumber1)
//     });
// }

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `Тоглогч <span>1</span> хожлоо <i class="fa-solid fa-trophy"></i>`
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `Тоглогч <span>2</span> хожлоо <i class="fa-solid fa-trophy"></i>`
}
else {
    document.querySelector("h1").innerHTML = `Хэн нь ч хожсонгүй <i class="fa-solid fa-face-angry"></i>`
}


console.log(randomNumber1)
console.log(dice1)
console.log(randomDice)
console.log(randomDiceSource)

console.log(randomNumber2)
console.log(dice2)
console.log(randomDice2)
console.log(randomDiceSource2)


