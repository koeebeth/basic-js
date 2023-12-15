const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let copy = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = new Array(matrix[i].length);
    row.fill(0);
    copy.push(row);
  }

  const POSSIBLE_POSITIONS = [
    [0,1], [1,1], [1, 0], [1, -1], [0,-1], [-1,-1], [-1,0], [-1,1]
  ]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        for (let pos of POSSIBLE_POSITIONS) {
          if (i + pos[0] < matrix.length 
            && i + pos[0] >= 0
            && j + pos[1] < copy[j].length
            && j + pos[1] >= 0){
            copy[i + pos[0]][j + pos[1]]++;
          }
      }
      }
    }
  }
  return copy;
}

module.exports = {
  minesweeper
};
