function solve(group,type,day){
    let result;
    switch(type){
        case 'Students':
            if(day == 'Friday'){
                result = group * 8.45;
            }else if(day == 'Saturday'){
                result = group * 9.80;
            }else{
                result = group * 10.46;
            }

            if(group >= 30){
                result *= 0.85;
            }

            break;
        case 'Business':
            if(group >= 100){
                group -= 10;
            }
            if(day == 'Friday'){
                result = group * 10.90;
            }else if(day == 'Saturday'){
                result = group * 15.60;
            }else{
                result = group * 16;
            }
            break;
        case 'Regular':
            if(day == 'Friday'){
                result = group * 15;
            }else if(day == 'Saturday'){
                result = group * 20;
            }else{
                result = group * 22.50;    
            }
            if(group >= 10 && group <=20){
                result *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}

solve(30,'Students','Sunday');
solve(40,'Regular','Saturday');
solve(15,'Regular','Saturday');