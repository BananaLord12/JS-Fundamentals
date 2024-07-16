function smallestOfThree(num1,num2,num3){
    let result;
    if(num1<num2 && num1<num3){
        result = num1;
    } else if(num2<num1 && num2<num3){
        result = num2;
    }else{
        result = num3;
    }
    console.log(result);
}

smallestOfThree(2,5,3);
smallestOfThree(600,342,123);
smallestOfThree(25,21,4);
smallestOfThree(2,2,2);