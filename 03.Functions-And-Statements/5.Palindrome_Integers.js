function palindrome(array){
    
    for(let i = 0; i < array.length; i++){
        console.log(isPalindrome(array[i]));
    }

    function isPalindrome(number){ 
        var reversedNum = String(number).split('').reverse().join(''),
            num = String(number);

        if(num === reversedNum){
            return true;
        }else{
            return false;
        }
    }
}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);