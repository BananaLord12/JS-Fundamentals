function solve(array, n){
    var output = [];
    for(let i = 0; i<array.length; i+=n){
        output.push(array[i]);
    }
    array = output;
    return array;
}

solve(['5','20','31','4','20'],2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);