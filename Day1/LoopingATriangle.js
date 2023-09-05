// My solution
let string= "";
for (let i = 0; i < 7; i++) {
    string += "#"
    console.log(string)
}

// Teacher's solution
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line)
}
