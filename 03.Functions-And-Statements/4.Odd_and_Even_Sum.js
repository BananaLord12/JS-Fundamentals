function calculateOddAndEven(num){
    var numbers = [];
    numbers = (""+num).split("");

    console.log(calculateSum(numbers))

    function calculateSum(numbers){
        var oddSum = 0,
            evenSum = 0;
        for(var i = 0; i< numbers.length; i++){
            if(numbers[i]%2==0){
                evenSum += Number(numbers[i]);
            }else{
                oddSum += Number(numbers[i]);
            }
        }

        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }
}

calculateOddAndEven(100435);
calculateOddAndEven(3495892137259234);