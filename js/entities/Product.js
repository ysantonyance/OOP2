export class Product {
  id;
  imgUrl;
  name;
  category;
  price;
  manufacturer;
  rating;

  constructor(id, imgUrl, name, category, price, manufacturer, rating) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.name = name;
    this.category = category;
    this.price = price;
    this.manufacturer = manufacturer;
    this.rating = rating;
  }

  info() {
    console.log(`id: ${this.id}`);
    console.log(`imgUrl: ${this.imgUrl}`);
    console.log(`name: ${this.name}`);
    console.log(`category: ${this.category.name}`);
    console.log(`price: ${this.price} UAH`);
    console.log(`manufacturer: ${this.manufacturer.name}`);
    console.log(`rating: ${this.rating}`);
  }

}
