//promises
const step1 = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Step 1 is complete.');
            resolve(); 
        },5000);
    });
};

const step2 = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Step 2 is complete.');
            resolve(); 
        },6000);
    });
};

const step3 = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Step 3 is complete.');
            resolve(); 
        },6000);
    });
};

//chianing promises
step1()
    .then(step2)//then表示step1之后发生什么
    .then(step3)
    .then(()=>{
        console.log('all steps are complete.');
    }).catch((error)=>{
        console.error('an error occured:', error);
    });