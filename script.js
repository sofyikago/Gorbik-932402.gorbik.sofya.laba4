"use strict";

const scores = [95, 88, 100, 45, 92, 85, 90];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterHighScores(arr) {
    const result = [];
    for (const score of arr) {
        if (score >= 80) {
            result.push(score);
        }
    }
    return result;
}

function calculateSum(arr) {
    let sum = 0;
    for (const score of arr) {
        sum += score;
    }
    return sum;
}

let name = prompt("Введите ваше имя:");
if (name === null || name.trim() === "") {
    name = "студент";
} else {
    name = name.trim();
}

const highScores = filterHighScores(scores);
const maxScore = findMax(scores);
const sum = calculateSum(scores);
const average = sum / scores.length;

let failedCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        failedCount++;
    }
}

alert(
    "Здравствуйте, " + name + "!\n" +
    "У вас " + highScores.length + " отличных работ, максимальный балл – " + maxScore
);

console.log("Баллы:", scores);
console.log("Отличные работы (>= 80):", highScores);
console.log("Средний балл:", average.toFixed(2));
console.log("Количество неудовлетворительных работ:", failedCount);

if (average >= 85) {
    console.log("Отличный результат, " + name + "! Так держать!");
}
