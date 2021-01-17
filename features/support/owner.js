const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given(/^An email "([^"]*)" and a password "([^"]*)" of an owner$/, async function (email, password) {
    this.setEmail(email);
    this.setPassword(password);
});

Given(/^An email "([^"]*)" and a password "([^"]*)" of a non-existent user$/, async function (email, password) {
    this.setEmail(email);
    this.setPassword(password);
});

Given(/^An userid "([^"]*)" of a registered user$/, async function (userid) {
    this.setUserId(userid);
});

When("I click on owner login in Smart-Vet App", async function () {
  var body = {};
  body.email = this.email;
  body.password = this.password;
  var data = {
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/owners/signin", data);
  this.setNumber(response.statusCode)
})

When("I want to find a registered user", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
      json: true
  };
  const response = await got.get("http://localhost:3001/api/owners/" + this.userid, data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet show user information", async function () {
  return assert.equal(this.number, 200);
});

Then("owner login successfully", async function () {
  return assert.equal(this.number, 200);
});

Then("Smart-Vet does not allow access to Owner", async function () {
  return assert.equal(this.number, 204);
});
