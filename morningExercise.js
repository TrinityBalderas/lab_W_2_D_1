let array = [1, 4, 11, 2, 37, -4];
for (let i = 0; i < array.length; i++){
    for(let y = 0; y < array.length; y++){
        if(array[i] + array[y] === 0){
            console.log("True");
        }else{
            console.log("False");
        };
    }
};

