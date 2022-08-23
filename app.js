const { readFileSync, writeFileSync } = require('fs')

const fisrt = readFileSync('./Content/first.txt', 'utf-8')
const second = readFileSync('./Content/second.txt', 'utf-8')

console.log(fisrt, second);

writeFileSync('./Content/result.txt',
    `Voici la somme des 2 fichiers texte : ${fisrt} ${second}`)