function solve(numbers, rotation){
    let result = 0,
    message = "";
    
    for(let i = 0; i < rotation; i++){
        result = numbers.shift();
        numbers.push(result);
    }
    message = numbers.join(" ");
    console.log(message);
}

solve([51,47,32,61,21],2);
solve([32,21,61,1],4);
solve([2,4,15,31],5);