function perfectNumberChecker(number){
    var sum = 0,
        isPerfect = true
        ogNumber = number;

    for(var i = 1; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }

    if(sum == ogNumber){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}

perfectNumberChecker(6);
perfectNumberChecker(28);
perfectNumberChecker(1236498);