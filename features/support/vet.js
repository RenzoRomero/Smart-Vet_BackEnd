const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given(/^An email "([^"]*)" and a password "([^"]*)" of a vet$/, async function (email, password) {
    this.setEmail(email);
    this.setPassword(password);
});

When("I click on vet login in Smart-Vet App", async function () {
  var body = {};
  body.email = this.email;
  body.password = this.password;
  var data = {
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/vets/signin", data);
  this.setNumber(response.statusCode)
})

Then("vet login successfully", async function () {
  return assert.equal(this.number, 200);
});

Then("Smart-Vet does not allow access to Vet", async function () {
  return assert.equal(this.number, 202);
});
