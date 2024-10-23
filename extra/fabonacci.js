function fabonacciGenerator(n) {

    let output = [];

    if (n === 1) {

        output = [0];

    } else if (n === 2) {

        output = [0, 1];

    } else {

        output = [0, 1];


        if (n === output.length) {

            output.push(output[output.length - 2] + output[output.length - 1]);

        } else {

        }

    }
    return output;
}

output = fabonacciGenerator(4);

console.log(output);