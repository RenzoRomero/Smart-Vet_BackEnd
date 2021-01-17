const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given("the service name {string} and the price {float}", async function (name, price) {
    this.setName(name);
    this.setPrice(price);
});

When("I want to register a new service", async function () {
  var body = {};
  body.name = this.name;
  body.price = this.price;
  var data = {
      headers: { 'Content-Type': 'application/json', 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmRlYjlmOWIwNjk1OTM3NGM0ODdiYmYiLCJpYXQiOjE2MTA4NjQ0MTUsImV4cCI6MTYxMjA3NDAxNX0.KO1XTB-BzMR0lXy6DgYwfLiN51ce7wqKkeTUCxdNqf8' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/services", data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet save the new service", async function () {
  return assert.equal(this.number, 200);
});

Given("the service id {string}", async function (id) {
    this.setId(id);
});

When("I want to search a service", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await got.get("http://localhost:3001/api/services/" + this.id, data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet show service details", async function () {
  return assert.equal(this.number, 200);
});

Then(/^Smart-Vet doesn't show service details$/, async function () {
  return assert.equal(this.number, 204);
});
