const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function countElement(arr, element){
  return arr.reduce((a, b) => b === element ? a + 1 : a, 0);
}

function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let count = 1;
    let section = names.slice(i + 1);
    section.forEach((elm, idx) => {
      if (elm === names[i]) {
        names[idx + i + 1] += `(${count})`;
        count++;
      }
    })
  }

  return names;
  // remove line with error and write your code here
}


module.exports = {
  renameFiles
};
