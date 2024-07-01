function solve(fruit,grams,pricePerKilo){
    var total = 0;
    var kilo = grams/1000;
    total = kilo * pricePerKilo;
    console.log(`I need $${total.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);