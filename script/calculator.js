function add(x, y) {
    let resX = Number(x);
    let resY = Number(y);

    if (isNaN(resX) || isNaN(resY)) throw new Error("Please provide numbers")
    return x + y;
}

function sub(x, y) {
    let resX = Number(x);
    let resY = Number(y);

    if (isNaN(resX) || isNaN(resY)) throw new Error("Please provide numbers")
    return x - y;
}

function mul(x, y) {
    let resX = Number(x);
    let resY = Number(y);

    if (isNaN(resX) || isNaN(resY)) throw new Error("Please provide numbers")
    return x * y;
}

function div(x, y) {
    let resX = Number(x);
    let resY = Number(y);

    if (isNaN(resX) || isNaN(resY)) throw new Error("Please provide numbers")
    return x / y;
}

export default {
    add, sub, mul, div
}