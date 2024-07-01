function solve(num){
    var result = 0,
        output = [],
        sNumber = num.toString();

    for(var i = 0, len = sNumber.length; i < len; i++){
        output.push(+sNumber.charAt(i));
    }    

    for(var i = 0, sum = 0; i < output.length; sum += output[i++]);

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);