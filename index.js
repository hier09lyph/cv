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
