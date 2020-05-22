// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cuboid{
    constructor(length, width, height){
        length = 4;
        width = 5;
        height = 5;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

// class CuboidMaker{
//     constructor(length, width, height){
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }
//     volume() {
//         return this.length * this.width * this.height;
//     }
//     surfaceArea() {
//         return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//     }
// }

class CubeMaker extends CuboidMaker {
    constructor(cubeAttrs){
        super(cubeAttrs);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2)    
    }
}

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

console.log(cube.surfaceArea());