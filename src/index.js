module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            //odd line 1, 3, 5 => add items to result in reverse order.
            if (i % 2) {
                matrix[i].reverse().forEach((v) => result.push(v));
            } else {
                matrix[i].forEach((v) => result.push(v));
            }
        }
    }

    return result;
};
