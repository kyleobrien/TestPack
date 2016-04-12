if (process.argv.length <= 2) {
  console.log('\nGenerates a string of text.\n');
  console.log('Usage:');
  console.log('  <placeholder>\n');
  console.log('Options:');
  console.log('  --length=<number>    Length of the output string [default: 10]');
  console.log('  -c --copy            Copy to clipboard.\n');

  return;
}

var length = 10;
var willCopyToClipboard = false;

// Parse user-specified options.
for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i].startsWith('--length=')) {
    var temp = process.argv[i].split('=', 2);
    length = Number(temp[1]);
  }
  else if (process.argv[i] == '--copy') {
    willCopyToClipboard = true;
  }
  // User has specified a short option, possibly stacked.
  else if (process.argv[i].match('^-[^-]+')) {
    var shortOptions = process.argv[i];
    for (var j = 1; j < shortOptions.length; j++) {
      if (shortOptions.charAt(j)) {
        willCopyToClipboard = true;
      }
    }
  }
}

var possibles = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOoPqQrRsStTuUvVwWxXyYzZ1234567890';
var garbage = "";

for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * (possibles.length + 1));
    garbage += possibles.charAt(random);
}

console.log(garbage);
if (willCopyToClipboard) {
  copyToClipboard(garbage);
}


function copyToClipboard(textToCopy) {
  var exec = require('child_process').exec;
  var cmd = '';

  //TODO: textToCopy should get sanitized
  if (process.platform == 'darwin') {
    cmd = 'echo ' + textToCopy + ' | pbcopy'
  }
  else if (process.platform == 'linux') {
    console.log('something else');
  }
  else if (process.platform == 'freebsd') {
    console.log('something else');
  }
  else if (process.platform == 'win32') {
    console.log('something else');
  }
  else if (process.platform == 'sunos') {
    // not implemented
  }

  exec(cmd, function(error, stdout, stderr) {
    // ???
  });
}
