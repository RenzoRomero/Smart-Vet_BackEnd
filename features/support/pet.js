const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given(/^the owner id "([^"]*)" and the pet name "([^"]*)"$/, async function (id, name) {
    this.setId(id);
    this.setName(name);
});

When("I click create a pet", async function () {
  var body = {};
  body.owner = this.id;
  body.name = this.name;
  var data = {
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/pets", data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet save the new pet", async function () {
  return assert.equal(this.number, 200);
});

Given("the owner id {string}", async function (id) {
    this.setId(id);
});

When("I want to search the pets of an owner", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await got.get("http://localhost:3001/api/pets/owner/" + this.id , data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet list the pets", async function () {
  return assert.equal(this.number, 200);
});

Given("the pet id {string}", async function (id) {
    this.setId(id);
});

When("I want to search a pet", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await got.get("http://localhost:3001/api/pets/" + this.id , data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet show pet details", async function () {
  return assert.equal(this.number, 200);
});

Then(/^Smart-Vet doesn't show pet details$/, async function () {
  return assert.equal(this.number, 202);
});
