function solve(text){
    let regex = /#[A-z]+/g,
        output = [];

    output = text.match(regex);

    for(let i = 0; i < output.length; i++){
        output[i] = output[i].replace("#", "");
        console.log(output[i]);
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');