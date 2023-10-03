/*Task 1: Create a javaScript class for a person
Create a javaScript class called "Person" with properties like name, age, and address.
Implement constructors and getter/setter methods for the class.
Test the class by creating instances and setting/retrieving values.*/

class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Getter method for name
    getName() {
      return this.name;
    }
  
    // Setter method for name
    setName(newName) {
      this.name = newName;
    }
  
    // Getter method for age
    getAge() {
      return this.age;
    }
  
    // Setter method for age
    setAge(newAge) {
      if (newAge >= 0) {
        this.age = newAge;
      } else {
        console.log("Age cannot be negative.");
      }
    }
  
    // Getter method for address
    getAddress() {
      return this.address;
    }
  
    // Setter method for address
    setAddress(newAddress) {
      this.address = newAddress;
    }
  }
  
  // Testing the Person class
  const person1 = new Person("John Doe", 30, "123 Main St");
  console.log("Name:", person1.getName());
  console.log("Age:", person1.getAge());
  console.log("Address:", person1.getAddress());
  
  // Updating values using setters
  person1.setName("Jane Doe");
  person1.setAge(35);
  person1.setAddress("456 Elm St");
  
  console.log("\nUpdated Information:");
  console.log("Name:", person1.getName());
  console.log("Age:", person1.getAge());
  console.log("Address:", person1.getAddress());
  