require('colors');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var constant = require('./constant');
var toolkit = require('./toolkit');

var args = constant.arguments;
if (!args.length || args[0] === '-h' || args[0] === '--help') {
  console.log(constant.helpMessage);
  return;
}

fs.exists(constant.basename, exists =>
  exists ? doProcess() : fs.mkdir(constant.basename, 0o700, doProcess));

function doProcess() {
  if (args[0] === '-l' || args[0] === '--list') {
    toolkit.getAllFiles(files => toolkit.printFiles(
      _.chain(files).map(path.parse).filter(p => p.ext === '').value()));
  } else if (args[0] === '-a' || args[0] === '--all') {
    toolkit.getAllFiles(files => toolkit.printFiles(_.map(files, path.parse)));
  } else if (args[0] === '--clear') {
    toolkit.getAllFiles(files => _.each(files, file => fs.unlink(path.join(constant.basename, file))));
  } else if (args[0] === '-c' || args[0] === '--completed') {
    toolkit.rename(args[1], args[1] + constant.doneSymbol);
  } else if (args[0] === '-i' || args[0] === '--init') {
    toolkit.rename(args[1] + constant.doneSymbol, args[1]);
  } else if (args[0] === '-d' || args[0] === '--delete') {
    toolkit.delete(args[1]);
  } else {
    toolkit.addNew(args.join(' '));
  }
};
