const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given("the product name {string}, the price {float} and stock {int}", async function (name, price, stock) {
    this.setName(name);
    this.setPrice(price);
    this.setStock(stock);
});

When("I want to register a new product", async function () {
  var body = {};
  body.name = this.name;
  body.price = this.price;
  body.stock = this.stock;
  var data = {
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/products", data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet save the new product", async function () {
  return assert.equal(this.number, 200);
});

Given("the product id {string}", async function (id) {
    this.setId(id);
});

When("I want to search a product", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await got.get("http://localhost:3001/api/products/" + this.id, data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet show product details", async function () {
  return assert.equal(this.number, 200);
});

Then(/^Smart-Vet doesn't show product details$/, async function () {
  return assert.equal(this.number, 202);
});
