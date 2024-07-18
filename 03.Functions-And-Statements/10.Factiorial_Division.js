function factorialDivision(num1, num2){
    var sum = 1,
        result1 = 0,
        result2 = 0;

    result1 = Division(num1);
    sum = 1;
    result2 = Division(num2);

    console.log((result1/result2).toFixed(2));

    function Division(number){
        if(number == 1){
            return sum;
        }

        sum *= number;

        return Division(number - 1);
    }
}

factorialDivision(5,2);
factorialDivision(6,2);