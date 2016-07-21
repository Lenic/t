require('colors');
var path = require('path');

exports.helpMessage = `
todo list help:

  -h, --help:

    show this help.

  no parameter, -l, --list:

    show uncompoleted items.

  your todo text:

    add new todo and return identity.

  -a, --all:

    show all items.

  --clear

    clear all items and return none.

  -c <identity>, --completed <identity>:

    complete spesified item and return none;

  -i <identity>, --init <identity>:

    init spesified item and return none;

  -d <identity>, --delete <identity>

    remove spesified item and return none.
`;

exports.arguments = Array.prototype.slice.call(process.argv, 2);
exports.basename = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.t');

exports.symbols = {
  init: 'INIT'.cyan.bold,
  '.done': 'DONE'.green.bold,
  delimiter: '-'.gray,
  pushOut: '=>'.gray
};

exports.fileNotFound = 'Spesified item not found'.yellow.bold;
exports.doneSymbol = '.done';
