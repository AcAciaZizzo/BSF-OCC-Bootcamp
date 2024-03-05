//Inheritance

//parent class
class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating.`)
    }
}

//Child class 使用extend继承父类
class Dog extends Animal{
    bark(){
        console.log("Woof Woof!");
    }
}

class Cat extends Animal{
    meow(){
        console.log("Meow meow!");
    }
}

const myDog= new Dog("Pelusa");
myDog.bark();
myDog.eat();

const cat = new Cat("Bingo");
cat.meow();
cat.eat();