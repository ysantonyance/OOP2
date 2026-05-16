export class Cart {
  id;
  products = [];

  constructor(id, products = []) {
    this.id = id;
    this.products = products;
  }

  AddProduct(product, quantity) {
    this.products.push({product, quantity});
  }

  info() {
    console.log(`id: ${this.id}`);
    for (let product of this.products) {
      console.log(`product: x${product.quantity} - ${product.product.name}`);
    }
  }
}
