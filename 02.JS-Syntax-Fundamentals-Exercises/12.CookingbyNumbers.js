function solve(number,op1,op2,op3,op4,op5){
    var options = [],
        num = Number(number);

    options.push(op1,op2,op3,op4,op5);

    for(var i = 0; i < 5; i++){
        switch(options[i]){
            case "chop":
                num /= 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num += 1;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num = (num * 0.8).toFixed(1);
                break;
        }
        console.log(num);
    }
}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');