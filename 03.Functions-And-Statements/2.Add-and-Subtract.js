function calculate(num1,num2,num3){
    var result = 0;
    result = sum(num1,num2);
    result = subtract(result,num3)
    console.log(result);

    function sum(num1,num2){
        return num1 + num2;
    }

    function subtract(result, num3){
        return result - num3;
    }
}





calculate(23, 6, 10);
calculate(1, 17, 30);
calculate(42, 58, 100);