/*
EXERCISE 46:

		Using the ES2015 class syntax, create a class called Person with a constructor setting the properties 
			"name", "weight", and "age", and a default property called "isAlive" set to true
		Additionally, add a method called greet() that takes a parameter "name" and returns a string in the format 
			"Hello, <name>, my name is <person's name>!" without using concatenation

        For example:
        
        const myPerson = new Person('Steve',160,35);
		//myPerson should be {name: 'Steve', weight: 160, age: 35, isAlive: true}
		
		myPerson.greet('Bob');
		//should return "Hello, Bob, my name is Steve!"
*/

class Person {

    constructor(name, weight, age){
            this.name = name;
            this.weight = weight;
            this.age = age;
            this.isAlive = true;
    }
	greet(name){
		return `Hi, ${name}, my name is ${this.name}!`;
	}


}
