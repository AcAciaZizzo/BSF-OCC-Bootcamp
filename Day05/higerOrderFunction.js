function higherOrderFunction(callback){
    console.log('This is the higher-order function speaking.');
    callback();
}

function passedFunction(){
    console.log('This is the passed function speaking.')
}

higherOrderFunction(passedFunction); 

let num=5;
higherOrderFunction(num);