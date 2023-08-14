/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return ((coordinates[0].charCodeAt() - 'a'.charCodeAt()) + parseInt(coordinates[1])) % 2 === 0
  };