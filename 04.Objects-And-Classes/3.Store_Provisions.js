function storeProvision(provisions,toAdd){
    let entries = {};

    for(let i = 0; i < provisions.length; i++){
        
        let name = provisions[i];
        let quantity = provisions[++i];

        entries[name] = Number(quantity);
    }

    for(let i = 0; i < toAdd.length; i++){
        
        if(entries.hasOwnProperty(toAdd[i])){
            entries[toAdd[i]] += Number(toAdd[++i]);
        }else{
            entries[toAdd[i]] = toAdd[++i];
        }        
    }

    for(let key in entries){
        console.log(`${key} -> ${entries[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])