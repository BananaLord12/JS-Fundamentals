function solve(num){
    var result = 0,
        output = [],
        sNumber = num.toString(),
        toCompare = 0,
        isNotSame = true;

    for(var i = 0, len = sNumber.length; i < len; i++){
        output.push(+sNumber.charAt(i));
    }    

    toCompare = output[0];

    for(var i = 0, sum = 0; i < output.length; sum += output[i++]){
        if(output[i] == toCompare){
            continue;
        }else{
            isNotSame = false;
        }
    }
    console.log(isNotSame);
    console.log(sum);
}

solve(2222222);
solve(1234);