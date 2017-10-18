/*
EXERCISE 41:

        Create a constructor called "Animal" with properties for "informalSpecies", "species", "genus", "family", "weight", and "color" with a default property of "extinct" set to false
        
        For example:

        new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red') 
            should return a new instance of Animal {
                informalSpecies: 'Red Fox', 
                species: 'vulpes vulpes', 
                genus: 'vulpes', 
                family: 'canidae', 
                weight: 10, 
                color: 'red', 
                extinct: false
            }

        new Animal('Red Fox','vulpes vulpes','vulpes','canidae',12,'purple') 
            should return a new instance of Animal {
                informalSpecies: 'Red Fox', 
                species: 'vulpes vulpes', 
                genus: 'vulpes', 
                family: 'canidae', 
                weight: 12, 
                color: 'purple', 
                extinct: false
            }

        new Animal('Human','h. sapiens','homo','hominidae',160,'green') 
            should return a new instance of Animal {
                informalSpecies: 'Human', 
                species: 'h. sapiens', 
                genus: 'homo', 
                family: 'hominidae', 
                weight: 160, 
                color: 'green', 
                extinct: false
            }
*/

function Animal(infSpecies, speciesName, genusName, familyName, weightName, colorName) {
	this.informalSpecies = infSpecies;
    this.species = speciesName;
    this.genus = genusName;
    this.family = familyName;
    this.weight = weightName;
    this.color = colorName;
    this.extinct = false;
}
