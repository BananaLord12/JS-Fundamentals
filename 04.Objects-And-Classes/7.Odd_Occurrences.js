function findOdds(arrayofWords){
    let words = String(arrayofWords).split(" ");

    let wordCount = []; 

    for(word of words){
        if(wordCount.some(searchedWord => searchedWord.name == word.toLowerCase(),0)){
            continue;
        }
        let count = 0;
        for(let i = 0; i < words.length; i++){
            if(words[i].toLowerCase() === word.toLowerCase()){
                count++;
            }
        }
        let storedInfo = {name: word.toLowerCase(), count: count};
        wordCount.push(storedInfo);
    }

    let msg = [];

    for(let word of wordCount.filter(searchedWord => searchedWord.count % 2 == 1)){
        msg.push(word.name);
    }

    console.log(msg.join(" "));
}

findOdds('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
findOdds(`Cake IS SWEET is Soft Cake sweet Food`);