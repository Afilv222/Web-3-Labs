class Car{

    constructor(name, model, parts) {
        this.name = name;
        this.model = model;
        this.parts = parts;      
     }

}


    Car.prototype.formatParts = function() {
        let result = ""; 

        this.parts.forEach(part => {
            result += `${part} `
        });
        return result
    }

const c1 = new Car('Nissan','Highlander',['Wheel','Tire','Seats'])

console.log(c1.formatParts()) 