var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var constant = require('./constant');

exports.printFiles = function(fileNames) {
  console.log();

  _.each(fileNames, p => fs.readFile(path.join(constant.basename, p.name + p.ext), 'utf-8', (err, content) => {
    if (err) throw err;

    console.log(
      '    %s %s %s %s %s',
      p.name.yellow.bold,
      constant.symbols.delimiter,
      constant.symbols[p.ext] || constant.symbols.init,
      constant.symbols.pushOut,
      content
    );
  }));
};

exports.getAllFiles = function(callback) {
  fs.readdir(constant.basename, (err, files) => {
    if (err) {
      console.error(err)
    } else {
      callback(files);
    }
  });
};

exports.rename = function(originalName, newName) {
  var fileFullName = path.join(constant.basename, originalName);
  fs.exists(fileFullName, exists => {
    if (exists) {
      fs.rename(fileFullName, path.join(constant.basename, newName), err => {
        if (err) throw err;
      });
    } else {
      console.log(constant.fileNotFound);
    }
  });
};

exports.delete = function(fileName) {
  var fileFullName = path.join(constant.basename, fileName);
  fs.exists(fileFullName, exists => {
    if (exists) {
      fs.unlink(fileFullName, err => {
        if (err) throw err;
      });
    } else {
      fs.exists(fileFullName + constant.doneSymbol, innerExists => {
        if (innerExists) {
          fs.unlink(fileFullName, err => {
            if (err) throw err;
          });
        } else {
          console.log(constant.fileNotFound);
        }
      });
    }
  });
};

exports.addNew = function (msg) {
  toolkit.getAllFiles(files => {
    var lastItem = _.chain(files)
                    .map(path.parse)
                    .map(p => parseInt(p.name))
                    .max()
                    .value();

    var newFileName = ((lastItem === -Infinity ? 0 : lastItem) + 1).toString();
    var newFileFullName = path.join(constant.basename, newFileName);
    fs.open(newFileFullName, 'w', 0o600, (err, fd) => {
      if (err) throw err;

      fs.write(fd, msg, innerError => {
        if (innerError) throw innerError;

        console.log('    %s', newFileName.yellow.bold);

        fs.close(fd);
      });
    });
  });
}
