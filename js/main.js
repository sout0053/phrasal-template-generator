var colour;
var creature;
var adjective;
var verbed;
var story;
var pass = false;

alert('Let’s make a story together!');
colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verbed = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like?\n a) Snacking\n b) Escaping\n c) Winning\n\n Enter the letter below:');
	while (!(story == ('a') || story == 'b' || story == 'c')) {
  story = prompt('Please enter a value of a, b, or c!\n\nWhich story would you like?\n a) Snacking\n b) Escaping\n c) Winning\n\n Enter the letter below:');
	}
	if (story == 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verbed + ' for hours.');
}
	if (story == 'b') {
  document.write('Ameilia ' + verbed + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');
}
	if (story == 'c') {
  document.write('Jackson chose his ' + adjective + ' , ' + colour + creature + ' card and ' + verbed + ' it to the table knowing he won.');
}
