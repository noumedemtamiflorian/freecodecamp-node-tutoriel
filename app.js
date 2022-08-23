const path = require('path');

const sep = path.sep

const filepath = path.join("/Content/", 'SubContent', 'text.txt')

const base = path.basename(filepath)

console.log(sep, filepath, base);