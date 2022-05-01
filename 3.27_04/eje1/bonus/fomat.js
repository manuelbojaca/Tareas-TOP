export const arrNames = (arr) => {
    for(let i = 1;i < arr.length; i++){
        arr[i] = i + '. ' + arr[i] + '\n';
    }

    return arr;
}
