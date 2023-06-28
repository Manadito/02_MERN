//Parent class Ninja
class Ninja {
    constructor(name, health, velocity, strength){
        this.name = name;
        this.health = health;
        this.velocity = 5;
        this.strength = 5;
    } 
    sayName = (name) => console.log(`The ninja's name is: ${this.name}`);
    showStats = (name, health, velocity, strength) => {
    console.log(`The ninja's name is: ${this.name}`);
    console.log(`The ninja's health level is: ${this.health}`);
    console.log(`The ninja's velocity level is: ${this.velocity}`)
    console.log(`The ninja's strength level is: ${this.strength}`)
    } 
    drinkSake = (health) => { 
    this.health += 10;
    console.log(`The ninja drank some powerful sake, health increased by 10 units: ${this.health}`);
    }
}
//Function calls 
console.log("-------------------------------------------------------------");

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

console.log("-------------------------------------------------------------");

const ninja2 = new Ninja("Naruto", 10);
ninja2.showStats();

console.log("-------------------------------------------------------------");

const ninja3 = new Ninja("Nobita", 20);
ninja3.showStats();
ninja3.drinkSake();
