var cats = ["sneakers", "modulo", "chairman meow", "pickles", "elvis"];

cats[2] = "dogfood";
//Math.random(); // [0-> 1)

//computers can only represent a finite amount of numbers, this isn't truely random. Mersenne twister

//Math.random() * cats.length;
var c = Math.floor(Math.random() * cats.length);

console.log(cats[c]);