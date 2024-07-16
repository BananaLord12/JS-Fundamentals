function matrixSubmitter(size){

    matrixDisplayer(size);

    function matrixDisplayer(size){
        var message = "";

        for(var i = 0; i< size; i++){
            for(var j = 0; j < size; j++){
                message += `${size} `;
            }
            console.log(message);
            message = "";

        }
    }

}

matrixSubmitter(3);
matrixSubmitter(7);
matrixSubmitter(2);