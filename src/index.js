/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var returns = 0;
  for (i = 0; i <= preferences.length; i++) {
    var a = preferences[i];
    var b = preferences[a - 1];
    var c = preferences[b - 1];

    if ((i + 1) === c && a !== b) {
      returns ++;
    }
  }
  return returns / 3;
};
