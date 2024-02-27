//topic: introduction to arrays
// Creating an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

// Accessing array elements
console.log('Character 2: ', characters[1]);
console.log("Character 5: ", characters[4]);
console.log('The last character: ', characters[characters.length - 1]);

// Modifying array elements
characters.push('sasuke');
characters.pop();
characters[0] = 'crybaby';

console.log('Modified Array: ', characters);

// Array Iteration
for(let i = 0; i < characters.length; i++) {
    console.log('Character ', i+1, characters[i]);
}

characters.forEach(function(character) {
    console.log(character)
})

//array methods

// indexOf
console.log(characters.indexOf('layla'));

/// includes
console.log('Includes a value: ', characters.includes('sasuke'));

// join
console.log('Joined array: ', characters.join(' - '));

// slice 
let slicedArray = characters.slice(1, 4);//提取，不改变原数列
console.log('Sliced array: ', slicedArray)//显示1，2，3元素

// splice
let removedElements = characters.splice(0, 2);//移除0，1元素
console.log('Removed elements: ', removedElements);//0，1
console.log('Updated Array: ', characters);//2，3，4