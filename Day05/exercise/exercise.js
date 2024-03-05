class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
        // this.test = width*height;
        // console.log(this.test);
    }

    calculateArea(){
        throw new Errow("Method not implemented.");
    }
}

class Rectangle extends Shape{
    displayFormula(){
        console.log('width * height = area of a rectangle.');
    }
    calculateArea(){
        let area = this.width*this.height;
        console.log(`${this.width}*${this.height}=${area}`);
        console.log(this.test);
    }

}

const shape1 = new Rectangle(2,5);
shape1.displayFormula();
shape1.calculateArea();
const shape2 = new Shape(1,5);

