function solve(m,n){
    let result = 0;
    var s = "";
    for(let i = m; i <= n ; i++){
        s += i + " ";
        result += i;
    }
    console.log(s);
    console.log(`Sum: ${result}`);
}

solve(5,10);
solve(0,26);
solve(50,60);