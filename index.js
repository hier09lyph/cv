function removeEveryOther(arr) {
    const nArr = [];
    let nr = 1;
    nArr[0] = arr[0];
    for (i = 2; i <= arr.length - 1; ++i) {
        if (Number.isInteger(i / 2)) {
            nArr[nr++] = arr[i]
        }
    }
    return nArr
}

function solution(number) {
    let sum = 0
    for (let i = number - 1; i > 2; i--) {
        (i % 5 && i % 3) ? 0: sum += i;
    }
    return sum
}