//First task
const numbers = [2, 3, 5, 7, 11, 13, 17];

const currentSums = (numbers) => {
    let result = [];
    let sum = numbers.reduce((prev, item) => {
        result.push(prev)
        return prev + item;
    })
    result.push(sum);
    return result;
}


// Second task
const str = "Каждый охотник желает знать, где сидит фазан.";

const firstLetters = (str) => {
    let prev ='';
    return str.split('').filter((item, index) => {
        if (!(prev === ' ' || index === 0)) {
            prev = item;
            return false;
        }
        prev = item;
        return true;
    })
}

// Third task
const arr1 = [ 1, 2, 3, 4, 5 ]; //[ 4, 5, 3, 1, 2 ]
const arr2 = [ 1, 2 ]; //[ 2, 1 ]
const arr3 =[ 1, 2, 3, 4, 5, 6, 7, 8];  //[ 5, 6, 7, 8, 1, 2, 3, 4 ]

const changeArray = (arr) => {
    let k = Math.floor(arr.length /2) + arr.length % 2;
    for (let i = 0; i < Math.floor(arr.length /2); i++) {
        let changeEl = arr[i];
        arr[i] = arr[k + i];
        arr[k + i] = changeEl;
    }
    return arr
}