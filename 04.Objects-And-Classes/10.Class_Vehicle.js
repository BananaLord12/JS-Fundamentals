class Vehicle{
    constructor(type, model, parts,fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.engine = parts.engine;
        this.parts.power = parts.power;
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = fuel;
    }
    drive(loss){
        this.fuel -= loss;
    }
}

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);
