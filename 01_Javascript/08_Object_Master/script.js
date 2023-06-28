const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1. Make a new object list with only those elements whose id is divisible by 3.

const divBy3 = pokemon.filter((p) => p.id % 3 === 0);

console.log(divBy3);

// 2. Make a new object list containing those elements with a fire type pokemon.


const firePokemon = pokemon.filter((p) => p.types[0] === "poison" || p.types[1]=== "poison");

console.log(firePokemon);

// 3. Make a new object list containing only those elements with more than 1 type.

const manyTypes = pokemon.filter(p => p.types.length > 1);

console.log(manyTypes);

// 4. Make an array only containing the Pokemon names.

const pkmnNames = pokemon.map(p => p.name);

console.log(pkmnNames);

// 5. Make an array only containing the Pokemon names of those elements with an id higher than 99.

const pkmnNames2 = pokemon.filter(p => p.id > 99)
.map(p => p.name);

console.log(pkmnNames2);

// 6. Make an array containing the Pokemon names of those elements with Poison as their only type. 

const pkmnNames3 = pokemon
    .filter(p => p.types.length < 2)
    .filter(p => p.types[0] === "poison")
    .map(p => p.name);
    
console.log(pkmnNames3);

// 7. Make an array of the first type of all those Pokemon whose second type is flying.

const frstFlying = pokemon
    .filter(p => p.types.length === 2)
    .filter(p => p.types[1] === "flying")
    .map(p => p.types[0]);
    
console.log(frstFlying);

// 8. Count the total number of Pokemon with the type normal.

const nrmlPkmn = pokemon
    .filter(p => p.types[0] === "normal" || p.types[1] === "normal")
    .reduce(sum => sum + 1, 0); // Using the reduce method.

console.log(nrmlPkmn);

// OR

const nrmlPkmn2 = pokemon
    .filter(p => p.types[0] === "normal" || p.types[1] === "normal")
    let nrmlPkmnTot = nrmlPkmn2.length; // Using the length method.

console.log(nrmlPkmnTot);