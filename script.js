const print= function(){
    console.log("Model ="+ this.model + ", Seat Capacity =" +this.seatCapacity + "Max speed =" + this.maxSpeed)
}

function Airplane(model,seatCapacity,maxSpeed){
    this.model=model;
    this.seatCapacity = seatCapacity;
    this.maxSpeed= maxSpeed;
    this.print= print;
}

let a = new Airplane("A324",23,180);
let B =new Airplane("As24",223,880);
let C = Airplane("S24",43,800);
// console.log(a.increaseCapacityBy10);
console.log(a.print());
console.log(Airplane.prototype);

Airplane.prototype = {
    increaseCapacityBy10: function(){
        this.seatCapacity += 10;
    }
}


delete Airplane.maxSpeed;

// Adding the average speed 
Airplane.prototype.avgSpeed = 600;

console.log(Airplane);
var newA = new Airplane("A34",345,534)
  console.log(newA.print());







