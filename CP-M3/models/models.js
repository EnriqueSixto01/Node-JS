const modes = require("../methods/methods.js");

// modes.addUser('enrique@gmail.com', 'Enrique') //agregamos un usuario al array users
// console.log(modes.users)
// console.log(modes.switchPlan('enrique@gmail.com')) //cambia de plan regular a premium y si se invoca de nuevo se cambia a plan regular

// modes.addSerie("The Office", 9, "regular", 2005);
// modes.addSerie("How I Met Your Mother", 9, "premium", 2005);
// modes.addUser("elena@henryflix.com", "Elena");
// modes.addSerie("How I Met Your Mother", 9, "premium", 2005);

// console.log(modes.users);
// console.log(modes.series);
// console.log(modes.listSeries("regular"));
// console.log(modes.play("The Office", 'elena@henryflix.com'));
// modes.switchPlan("elena@henryflix.com")
// console.log(modes.users);
// console.log(modes.series);
// console.log(modes.play("How I Met Your Mother", 'elena@henryflix.com'));

//===========================================================================
// modes.addSerie('The Big Bang Theory', 12, 'regular', 2007)
// modes.addSerie('The Office', 9, 'regular', 2005)
// modes.addUser('martu@henryflix.com', 'Martu')
// console.log(modes.listUsers())
// // console.log(modes.users);
// console.log(modes.series);
// console.log(modes.play('The Big Bang Theory', 'martu@henryflix.com'))

//===========================================================================

modes.addUser('martu@henryflix.com', 'Martu')
// modes.addUser('mora@henryflix.com', 'Mora')
modes.addSerie('The Office', 9, 'regular', 2005)
modes.addSerie('breaking bad', 9, 'regular', 2005)
// modes.addUser('wan@henryflix.com', 'Wanda')
modes.play('The Office', 'martu@henryflix.com')
// modes.play('The Office', 'mora@henryflix.com')
// modes.play('The Office', 'wan@henryflix.com')
modes.rateSerie('The Office', 'martu@henryflix.com', 5)


// modes.rateSerie('The Office', 'mora@henryflix.com', 3)
// modes.rateSerie('The Office', 'wan@henryflix.com', 4)


// modes.addUser('martu@henryflix.com', 'Martu')
// modes.addSerie('The Office', 9, 'regular', 2005)
console.log(modes.users)
// console.log(modes.series)
//  console.log(modes.listSeries()[0].reviews)
