export class Category {
  id;
  name;
  description;

  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  info() {
    console.log(`id: ${this.id}`);
    console.log(`name: ${this.name}`);
    console.log(`description: ${this.description}`);
  }
}
