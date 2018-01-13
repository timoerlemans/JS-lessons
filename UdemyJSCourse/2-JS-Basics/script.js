var ageTim = 27 * 5;
var ageValerie = 96 * 5;
var lengthTim = 181;
var lengthValerie = 157;

if (ageTim > ageValerie && lengthTim > lengthValerie) {
	console.log('Tim wins!');
} else if (ageTim < ageValerie && lengthTim < lengthValerie) {
	console.log('Valerie wins!');
} else {
	console.log('It\'s a tie!');
}