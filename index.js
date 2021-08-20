const readlineSync = require('readline-sync')

let quizScore = 0
console.log('= = = = = = Welcome to Quiz = = = = = =')
const userName = readlineSync.question('What is your name? ')
console.log('Welcome, ' + userName + '.')

function quiz(question, answer) {
    const userAns = readlineSync.question(question)
    if (userAns === answer) {
        console.log('You have answered right!')
        quizScore += 2
    }
    else {
        console.log('You have answered wrong!')
        quizScore -= 1
    }
    console.log('Your score is -> ' + quizScore)
    console.log('- - - - - - - - - - -')
}

// Array of questions
const questions = [
    {
        question : 'Where does Iron Man live? ',
        answer : 'USA'
    },
    {
        question : 'What is special about Captain America? ',
        answer : 'Shield'
    },
    {
        question : 'Is Flash a part of Marvel? ',
        answer : 'No'
    },
    {
        question : 'Have you watched Loki yet? ',
        answer : 'Yes'
    },
    {
      question : 'What is the name of the herb that gives Black Panther its divine powers? ',
      answer : 'Heart Shaped Herb'
    },
    {
      question : 'What is the human name of Hulk? ',
      answer : 'Bruce Banner'
    },
    {
      question : 'By what name is Tony company know by? ',
      answer : 'Stark Industries'
    }

]

// for loop
for (let que in questions){
    quiz(questions[que].question, questions[que].answer)
}

console.log(userName + ' you have scored -> ' + quizScore)