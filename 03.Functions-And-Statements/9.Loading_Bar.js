function loadingBarDisplayer(number){
    var singleDigit = number / 10;

    if(singleDigit == 10){
        console.log("100% Complete!")
        console.log(`[${`%`.repeat(singleDigit)+`.`.repeat(10 - singleDigit)}]`);
    }else{
        console.log(`${number}% [${`%`.repeat(singleDigit)+`.`.repeat(10 - singleDigit)}]`);
        console.log("Still loading...");
    }  
}

loadingBarDisplayer(0);
loadingBarDisplayer(30);
loadingBarDisplayer(50);
loadingBarDisplayer(100);