let obj2={
    r : 3,
    h: 4,
    pi: 3.14,
    area: function(){
        return (this.pi)*(this.r**2)*(this.h)
    }

}

console.log(obj2.area())