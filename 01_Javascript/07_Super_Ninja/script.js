
// Chat GPT helped me correct a mistake and a few redunduncies within my code. 
// I have included what I originally had prior to the correction.
// Everything was working fine, except for the drinkSake function for which 
// Chat GPT recommended I change its syntax format. That minor change got my
// code to fully execute.   

// Parent class Ninja 
class Ninja {
    constructor(name, health, velocity, strength){
        this.name = name;
        this.health = health;
        this.velocity = velocity || 5; //I originally had: this.velocity = velocity; 
        this.strength = strength || 5; //I originally had: this.strength = strength;
    } 
    sayName(){ //Originally had it like this: sayName = (name) => {..same code as below..}
        console.log(`The ninja's name is: ${this.name}`);
    }
    showStats(){ //Originally had it like this: showStats = (name, health, velocity, strength) => {..same code as below..}
        console.log(`The ninja's name is: ${this.name}`);
        console.log(`The ninja's health level is: ${this.health}`);
        console.log(`The ninja's velocity level is: ${this.velocity}`)
        console.log(`The ninja's strength level is: ${this.strength}`)
    } 
    drinkSake(){//Originally had: drinkSake = (health) => {..same code as below..}. This format was giving me the error. 
    this.health += 10;
    //console.log(`The ninja drank some powerful sake, health increased by 10 units: ${this.health}`);
    }
}
// Child class Sensei
class Sensei extends Ninja {
    constructor(name, wisdom){ // I've kept wisdom as a parameter, but Chat GPT told me it wasn't necessary.
    super(name, 200, 10, 10);
    this.wisdom = 10;        
    }
    speakWisdom = () => {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// New object created
const superSensei = new Sensei("Master Splinter");
console.log("--------------------------------------------------------------------------");
superSensei.speakWisdom();
// will print -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
console.log("---------------------------------------------------------------------------");
superSensei.showStats();
// will print -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
