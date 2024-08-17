function solution(inputs){

    var originalSpell = inputs[0];

    for(let i = 1; i < inputs.length; i++){

        var commands = String(inputs[i]).split("!");
        if(commands[0] == "End"){
            break;
        }
        switch(commands[0]){
            case "RemoveEven":
                originalSpell = RemoveEven(originalSpell);
                break;
            case "TakePart":
                originalSpell = TakePart(originalSpell, commands[1], commands[2])
                break;
            case "Reverse":
                originalSpell = Reverse(originalSpell, commands[1]);
                break;
        }
        
    }

    console.log(`The concealed spell is: ${originalSpell}`);

    function RemoveEven(input){
        var result = "";
        for(let i = 0; i < input.length; i = i + 2){
            result += input[i];
        }
        console.log(result);
        return result;
    }

    function TakePart(input, start, end){
        var result = "";
        result = input.substring(start, end);
        console.log(result);
        return result;
    }

    function Reverse(input, substring){
        var result = "";        
        var start = input.indexOf(substring);
        var end = substring.length + start;
        if(start == -1){
            console.log("Error");
            return input;
        }

        var section = input.substring(start, end);
        input = input.replace(substring, '');

        var split = section.split("");
        var reverse = split.reverse();
        var combined = reverse.join("");

        result = input.concat(combined);
        console.log(result);
        return result;
    }

}

solution(["asAsl2adkda2mdaczsa", 
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])

solution(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])    