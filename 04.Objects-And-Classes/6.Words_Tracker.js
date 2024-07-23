function wordCount(words){
    let searchedWords = String(words[0]).split(" "),
        text = String(words).split(",");

    let wordcount = [];

    for(word of searchedWords){
        let count = 0;
        for(let i = 1; i < text.length; i++){
            if(text[i] === word){
                count++;
            }
        }
        let storedInfo = {name: word, count: count};
        wordcount.push(storedInfo);
    }

    wordcount.sort((a,b) => b.count - a.count)

    for(word of wordcount){
        console.log(`${word.name} - ${word.count}`);
    }
}

wordCount(['this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'   
        ]);

wordCount(['is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);