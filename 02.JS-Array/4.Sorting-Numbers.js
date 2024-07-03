function solve(arr){
    arr.sort((a, b) => a - b);
    let answer = [];
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        answer.push(arr[start++]);
        if (start <= end) {
            answer.push(arr[end--]);
        }
    }
    return answer;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);