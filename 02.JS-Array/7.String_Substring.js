function solve(word, text){

    let regex = new RegExp(word,"i");

    if(text.match(regex)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }
}

solve('javascript','JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');