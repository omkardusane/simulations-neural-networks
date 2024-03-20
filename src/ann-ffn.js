/* ann-ffn = artificial feed forward neural network 

     takes input matrix, 1x2
     passes through 3 layers
*/

let { sumColumn, matrix, newMatrix } = require('./helpers');
module.exports = { main }
function main(inputMatrix = null) {
    let in1 = inputMatrix ? matrix(inputMatrix) : matrix([[0, 0]]);// 1x2
    let weightLayers = [
        matrix([
            // 2x4
            [0.3, 0.6, 0.8, 0.9],
            [0.7, 0.4, 0.2, 0.1]
        ]),
        matrix([
            // 4x3
            [0.2, 0.9, 0.7],//1x3,
            [0.4, 0.7, 0.6],//2x3,
            [0.6, 0.5, 0.6],//3x3,
            [0.8, 0.3, 0.7]//4x3,
        ]),
        matrix([
            // 3x2
            [0.2, .8],
            [0.4, .6],
            [0.45, .55]
        ])
    ];
    let biases = [
        matrix([[3, 4, 1, 1]]),
        matrix([[0.3, 6, 1]]),
        matrix([[0.3, 4]])
    ];
    // let S = [0.25, 0.5, 0.75, 1.0];// random 1x4
    let lastLayerMatrix = in1;
    let k = 0;
    for (let wLayer of weightLayers) {
        let biasMtrx = biases[k++];
        // let nextLayerValues = newMatrix(lastLayerMatrix.rows, wLayer.columns);
        let nextLayerValuesRow1 = [];
        for (let i = 0; i < wLayer.columns; i++) {
            nextLayerValuesRow1[i] = sumColumn(lastLayerMatrix, wLayer, i) + biasMtrx[0][i];
        }
        lastLayerMatrix = matrix([nextLayerValuesRow1]);
    }
    let Unew = lastLayerMatrix.getRow(0);
    console.log('output might be 0 -> confidence = ', Unew[0])
    console.log('output might be 1 -> confidence = ', Unew[1])
}
// main();
// export main;
