function solve(array){
    array.sort();
    for(let i = 1; i <= array.length; i++){
        console.log(`${i}.${array[i-1]}`);
    }
}

solve(["Emma","Emma"]);