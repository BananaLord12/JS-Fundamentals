function passwordSubmiter(password){

    var passwordArray = String(password).split("");

    passwordChecker(passwordArray);

    function passwordChecker(passwordArray){
        var isValid = true,
            r = new RegExp('\\d','g'),
            count = 0,
            password = passwordArray.join("");

        if(passwordArray.length < 6 || passwordArray.length > 10){
            isValid = false;
            console.log("Password must be between 6 and 10 characters");
        }

        if(!onlyLettersAndNumbers(password)){
            isValid = false;
            console.log("Password must consist only of letters and digits");
        }
        while(r.exec(password)) count++;

        if(count < 2){
            isValid = false;
            console.log("Password must have at least 2 digits");
        }

        if(isValid){
            console.log("Password is valid");
        }
    }

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
    }
}

passwordSubmiter('logIn');
passwordSubmiter('MyPass123');
passwordSubmiter('Pa$s$s');