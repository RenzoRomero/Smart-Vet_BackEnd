const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.email = "";
    this.password = "";
    this.number = 0;
    this.id = "";
    this.name = "";
    this.price = 0.00;
    this.stock = 0;
    this.userId = ""
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  setNumber(number) {
    this.number = number;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name
  }

  setPrice(price) {
    this.price = price;
  }

  setStock(stock) {
    this.stock = stock;
  }

  setUserId(userid) {
    this.userid = userid;
  }

}

setWorldConstructor(CustomWorld);
