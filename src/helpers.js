// av[0] = sigmoid((layers[last].weight * layers[last].av) + b);
module.exports = { sumColumn, newMatrix, matrix };

function sumColumn(activationLayer, weightsMatrix, columnIdx) {
    let x = 0;
    // activationLayer S = 1x4
    // weightLayer w = 4x3 cha 4x1
    // out is cell S(1x4) x S(4x1) = V(1x1)
    // weightsMatrix.rows == activationLayer.columns
    for (let i = 0; i < weightsMatrix.rows; i++) {
        let cell = weightsMatrix[i][columnIdx];
        let avCarrierValue = activationLayer.get(0, i);
        x += cell * avCarrierValue;
        console.log({ cell, avCarrierValue, x });
    }
    console.log('---', { x });
    return x;
}

function newMatrix(rows, columns) {
    let x = [];
    for (let i = 0; i < rows; i++) {
        x[i] = [];
        for (let j = 0; j < columns; j++) {
            x[i][i] = (0);
        }
    }
    return matrix(x);
};

function matrix(x) {
    // An m × n matrix: the m rows are horizontal and the n columns are vertical.
    // let x. = inputArray;
    x.rows = x.length;
    x.columns = x[0] ? x[0].length : 0;
    x.size = function () {
        console.log("size= " + x.rows + "x" + x.columns)
    }
    x.get = function (row, col) {
        return x[row] ? x[row][col] : null;
    }
    x.getRow = function (row, col) {
        return x[row];
    }
    return x;
};

