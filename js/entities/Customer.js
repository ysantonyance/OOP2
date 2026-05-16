export class Customer {
  id;
  name;
  age;
  country;
  city;

  constructor(id, name, age, country, city) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  info() {
    console.log(`id: ${this.id}`);
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    console.log(`country: ${this.country}`);
    console.log(`city: ${this.city}`);
  }
}
