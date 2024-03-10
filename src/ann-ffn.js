// av[0] = sigmoid((layers[last].weight * layers[last].av) + b);

function sumColumn(activationLayer, weightsMatrix, sIndex) {
    let x = 0;
    // activationLayer S = 1x4
    // weightLayer w = 4x3 cha 4x1
    // out is cell S(1x4) x S(4x1) = V(1x1)
    for (let i = 0; i < activationLayer.length; i++) {
        let cell = weightsMatrix[i][sIndex];
        let avCarrierValue = activationLayer[i];
        x += cell * avCarrierValue;
        console.log({ cell, avCarrierValue, x });
    }
    console.log('---', { x });
    return x;
}

function main() {
    let R = [1, 1];
    let RSweights = [
        // 2x4
        [0.3, 0.6, 0.8, 0.9],
        [0.7, 0.4, 0.2, 0.1]
    ];
    let S = [0.25, 0.5, 0.75, 1.0];// random 1x4
    for (let i = 0; i < S.length; i++) {
        S[i] = sumColumn(R, RSweights, i);
    };
    let weightsMatrix = [ // S->T
        [0.2, 0.9, 0.7],//1x3,
        [0.4, 0.7, 0.6],//2x3,
        [0.6, 0.5, 0.6],//3x3,
        [0.8, 0.3, 0.7]//4x3,
    ];
    let Tnew = [0, 0, 0];// t 1x3
    for (let i = 0; i < Tnew.length; i++) {
        Tnew[i] = sumColumn(S, weightsMatrix, i);
        //  todo: sigmoid(summed + bias)
    }
    console.log(Tnew);

    //  iterate on T -> V
    let TVWeights = [
        // 3x2
        [0.2, .8],
        [0.4, .6],
        [0.45, .55],
    ]
    let Unew = [0, 1]; // 1x2
    for (let i = 0; i < Unew.length; i++) {
        Unew[i] = sumColumn(Tnew, TVWeights, i);
        //  todo: sigmoid(summed + bias)
    }
    console.log(Unew);

    console.log('output might be 0 -> confidence = ', Unew[0])
    console.log('output might be 1 -> confidence = ', Unew[1])
}
main();
