import { Category } from "./entities/Category.js";
import { Manufacturer } from "./entities/Manufacturer.js";
import { Product } from "./entities/Product.js";
import { Customer } from "./entities/Customer.js";
import { Cart } from "./entities/Cart.js";
import { Order } from "./entities/Order.js";

let technology = new Category(1, "Technology");
let toys = new Category(2, "Toys");

let TanSill = new Manufacturer(
  1,
  "Tan Sill",
  undefined,
  4.7,
  new Date("November 6, 2024"),
  ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday"],
  ["09:00", "18:00"]
);

let Euromart = new Manufacturer(
  2,
  "Euromart",
  "https://www.vmagazin.sk/wp-content/uploads/2023/10/euromart-1024x444.png",
  4.2,
  new Date("February 6, 2017"),
  ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday"],
  ["09:00", "18:00"]
)

let TranslationTools = new Manufacturer(
  3,
  "Translation Tools",
  undefined,
  4.3,
  new Date("June 28, 2020"),
  ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday"],
  ["09:00", "18:00"]
);

let usb = new Product(
  1,
  "https://content.rozetka.com.ua/goods/images/big/657668883.jpg",
  "Usb хаб перехідник type с",
  technology.name,
  899,
  TanSill.name,
  4.7
);

let Xiaomi = new Product(
  2,
  "https://content1.rozetka.com.ua/goods/images/big/584957041.jpg",
  "Мобільний телефон Xiaomi Redmi 15 8/256GB",
  technology,
  7799,
  Euromart,
  4.2
)

let PusheenPatriot = new Product(
  3,
  "https://content.rozetka.com.ua/goods/images/big/321284478.jpg",
  "М'яка іграшка Pusheen cat 23 х 25 см",
  toys,
  566,
  TranslationTools,
  4.3
);

let Karina = new Customer(1, "Karina", 17, "Bulgaria","Burgas");

let KarinaCart = new Cart(
  1,
);

let order = new Order(
  1,
  new Date(),
  KarinaCart.products,
  Karina
);

console.log(Category);
technology.info();
console.log("\n");
toys.info();

console.log(Manufacturer);
TanSill.info();
console.log("\n");
Euromart.info();
console.log("\n");
TranslationTools.info();

console.log(Product);
usb.info();
console.log("\n");
Xiaomi.info();
console.log("\n");
PusheenPatriot.info();

console.log(Customer);
Karina.info();
console.log(Cart);
KarinaCart.AddProduct(usb, 10);
KarinaCart.AddProduct(Xiaomi, 2);
KarinaCart.AddProduct(PusheenPatriot, 52);
KarinaCart.info();

console.log(Order);
order.info();
