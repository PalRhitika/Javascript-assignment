let square={
    length: 6,
    breadth:  6,
    showArea1: showArea

}
let rectangle={
    length: 6,
    breadth: 4,
    showArea2: showArea

}

function showArea(){
    area=this.length*this.breadth;
    return area
}
console.log(square.showArea1())
console.log(rectangle.showArea2())