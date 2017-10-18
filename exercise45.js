/*
EXERCISE 45:

		Using the ES2015 class syntax, create a class called Person with a constructor setting the properties 
			"name", "weight", and "age", and a default property called "isAlive" set to true

        For example:
        
        const myPerson = new Person('Steve',160,35);
        //myPerson should be {name: 'Steve', weight: 160, age: 35, isAlive: true}
*/

class Person {

        constructor(name, weight, age){
                this.name = name;
                this.weight = weight;
                this.age = age;
                this.isAlive = true;
        }

}
