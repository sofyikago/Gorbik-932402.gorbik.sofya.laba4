"use strict";

const LAB_SCORES = [95, 88, 100, 45, 92, 85, 90];

const EXCELLENT_THRESHOLD = 80;
const FAIL_THRESHOLD = 50;
const MOTIVATION_THRESHOLD = 85;
const DEFAULT_NAME = "студент";

function findMax(scores) {
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }
    return max;
}

function filterHighScores(scores) {
    return scores.filter(function (score) {
        return score >= EXCELLENT_THRESHOLD;
    });
}

function calculateSum(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum;
}

function countFailedWorks(scores) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < FAIL_THRESHOLD) {
            count++;
        }
    }
    return count;
}

function calculateAverage(scores) {
    return calculateSum(scores) / scores.length;
}

function analyzeScores(scores) {
    return {
        excellentCount: filterHighScores(scores).length,
        maxScore: findMax(scores),
        average: calculateAverage(scores),
        failedCount: countFailedWorks(scores)
    };
}

function askStudentName() {
    const input = prompt("Введите ваше имя:", "");
    if (input === null || input.trim() === "") {
        return DEFAULT_NAME;
    }
    return input.trim();
}

function showGreeting(name, stats) {
    alert(
        "Привет, " + name + "!\n" +
        "У вас " + stats.excellentCount + " отличных работ, " +
        "максимальный балл – " + stats.maxScore
    );
}

function logStatistics(stats) {
    console.log("Средний балл: " + stats.average.toFixed(2));
    console.log("Неудовлетворительных работ: " + stats.failedCount);
}

function logMotivation(average) {
    if (average >= MOTIVATION_THRESHOLD) {
        console.log("Отличная работа! Средний балл " + average.toFixed(2) +
            " — так держать, вы на пути к красному диплому!");
    } else {
        console.log("Средний балл " + average.toFixed(2) + " ниже " +
            MOTIVATION_THRESHOLD + " — мотивационное сообщение не выводится.");
    }
}

function demonstrateMotivationCheck() {
    const testCases = [
        { label: "Средний выше порога", scores: [90, 95, 100, 88, 92] },
        { label: "Средний ровно на пороге", scores: [95, 88, 100, 45, 92, 85, 90] },
        { label: "Средний ниже порога", scores: [70, 60, 85, 45, 90, 75] }
    ];

    console.log("--- Проверка условия «средний балл ≥ " + MOTIVATION_THRESHOLD + "» ---");
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const average = calculateAverage(testCase.scores);
        console.log(testCase.label + ": [" + testCase.scores.join(", ") + "]");
        logMotivation(average);
    }
}

function main() {
    const name = askStudentName();
    const stats = analyzeScores(LAB_SCORES);

    showGreeting(name, stats);
    logStatistics(stats);
    logMotivation(stats.average);

    demonstrateMotivationCheck();
}

main();
