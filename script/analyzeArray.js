export default function analyzeArray(arr) {
    const sum = (arr) => {
        let s = 0;
        for (let num of arr) {
            if (!isNaN(num)) {
                s += num;
            }
        }
        return s;
    }

    const minimum = (arr) => {
        let min = undefined;
        for (let num of arr) {
            if (!min || num < min) {
                min = num;
            }
        }
        return min;
    }

    const maximum = (arr) => {
        let max = undefined;
        for (let num of arr) {
            if (!max || num > max) {
                max = num;
            }
        }
        return max;
    }

    return {
        'average': sum(arr) / arr.length,
        'min': minimum(arr),
        'max': maximum(arr),
        'length': arr.length
    }
}