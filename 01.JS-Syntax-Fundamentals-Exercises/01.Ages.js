function solve(num){
    switch(true){
        case num>=0 && num <=2: console.log('baby'); break;
        case num>=3 && num <=13: console.log('child'); break;
        case num>=14 && num <=19: console.log('teenager'); break;
        case num>=20 && num <=65: console.log('adult'); break;
        case num>=66: console.log('elder'); break;
        default: console.log('out of bounds'); break;
    }
}

solve(20);
solve(1);
solve(100);
solve(-1);