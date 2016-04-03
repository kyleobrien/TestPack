if (process.argv.length <= 2) {
  console.log('\nGenerates a string of text.\n');
  console.log('Usage:');
  console.log('  <placeholder>\n');
  console.log('Options:');
  console.log('  --length=<number> [default: 32]\n');

  return;
}

var length = 32;
for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i].startsWith('--length=')) {
    var temp = process.argv[i].split('=', 2);
    length = Number(temp[1]);
  }
}

var possibles = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOoPqQrRsStTuUvVwWxXyYzZ1234567890';
var garbage = "";

for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * (possibles.length + 1));
    garbage += possibles.charAt(random);
}

console.log(garbage);
