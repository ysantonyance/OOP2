export class Order {
  id;
  date;
  products = []; // product + quantity
  customer;
  status;
  totalPrice;

  constructor(id, date, products = [], customer ,status = "Pending" ) {
    this.id = id;
    this.date = date;
    this.products = products;
    this.customer = customer;
    this.status = status;
  }

  TotalPrice() {
    let result = 0;

    for (let product of this.products) {
      result += product.product.price * product.quantity;
    }

    return result;
  }

  info() {
    console.log(`id: ${this.id}`);
    console.log(`date: ${this.date}`);
    for (let product of this.products) {
      console.log(`product: x${product.quantity} - ${product.product.name} `);
    }
    console.log(`customer: ${this.customer.name}`);
    console.log(`totalPrice: ${this.TotalPrice()} UAH`);
    console.log(`status: ${this.status}`);
  }
}
