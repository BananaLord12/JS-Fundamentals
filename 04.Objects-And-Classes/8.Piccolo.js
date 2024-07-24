function Piccolo(actions){

    let carPark = [];

    for(action of actions){
        tokens = String(action).split(", ");
        if(tokens[0] == "IN"){
            if(carPark.includes(tokens[1])){
                continue;
            }
            carPark.push(tokens[1]);
        }else {
            if(!carPark.includes(tokens[1])){
                continue;
            }
            carPark.splice(carPark.indexOf(tokens[1]),1);
        }
    }

    if(carPark.length == 0){
        console.log("Parking Lot is Empty");
    }

    carPark.sort();
    for(car of carPark){
        console.log(car);
    }
}

Piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

Piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])