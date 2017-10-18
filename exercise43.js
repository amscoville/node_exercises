/*
EXERCISE 43:

        Create a constructor called "Pet" that extends the "Animal" constructor from exercise 42
             and adds the "name" property and a "domesticated" property defaulting to true,
             and whose prototype inherits from "Animal",
             and adds a new "feed" method on the Pet prototype that returns "happy"
        
        For example:

        const bobby = new Pet('Bobby',Red Fox','vulpes vulpes','vulpes','canidae',10,'red','bark') 
            should return a new instance of Pet {
                name: 'Bobby'
                informalSpecies: 'Red Fox', 
                species: 'vulpes vulpes', 
                genus: 'vulpes', 
                family: 'canidae', 
                weight: 10, 
                color: 'red', 
                sound: 'bark'
                extinct: false
            }
        bobby.makeSound() should return 'bark, bark!'
        bobby.feed() should return "happy"

        const fox = new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red','bark') 
        should return a new instance of Animal {
            informalSpecies: 'Red Fox', 
            species: 'vulpes vulpes', 
            genus: 'vulpes', 
            family: 'canidae', 
            weight: 10, 
            color: 'red',
            sound: 'bark'
            extinct: false
        }
        fox.makeSound() should return "bark, bark!"
        
*/



function Animal(infSpecies, speciesName, genusName, familyName, weightName, colorName, sound) {
	this.informalSpecies = infSpecies;
    this.species = speciesName;
    this.genus = genusName;
    this.family = familyName;
    this.weight = weightName;
    this.color = colorName;
    this.sound = sound;
    this.extinct = false;
}

Animal.prototype = {
    makeSound: function(){
        return this.sound + ', ' + this.sound + '!';
    }
};

Pet.prototype = new Animal();


function Pet(name, infSpecies, speciesName, genusName, familyName, weightName, colorName, sound){
    this.name = name;
    Animal.call(this, infSpecies, speciesName, genusName, familyName, weightName, colorName, sound);
    this.domesticated = true;
}

Pet.prototype.feed = function (){ return 'happy'; };
