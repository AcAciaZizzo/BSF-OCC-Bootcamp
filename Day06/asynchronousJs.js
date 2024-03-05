//synchronous function
console.log('first');
console.log('second');
console.log('third');

//asynchronous programming
console.log('first');

setTimeout(()=>{
    console.log('second');
},5000);//delay of 5000 milliseconds(5 seconds)

console.log('third');