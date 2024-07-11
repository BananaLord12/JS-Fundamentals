function solve(text){

    let regex = new RegExp("[A-Z][a-z]+","g"),
        output = [],
        message = "";

    output = text.match(regex);
    message = output.join(", ");
    console.log(message);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');