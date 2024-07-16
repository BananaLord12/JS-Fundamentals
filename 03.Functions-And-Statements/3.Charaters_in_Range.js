function inRange(char1,char2){
    var start = char1.charCodeAt(0),
        end = char2.charCodeAt(0);

    if(end < start){
        start = char2.charCodeAt(0);
        end = char1.charCodeAt(0);
    }
    
    printInRange(start,end);

    function printInRange(start,end){
        var message = "";
        for(var i = ++start; i < end; i++){
            message += String.fromCharCode(i)+ " ";
        }

        console.log(message);
    }
}

inRange('a','d');
inRange('#',':');
inRange('C','#');