const { Given, When, Then } = require('@cucumber/cucumber');
const got = require('got');
const assert = require('assert').strict


Given("the promotion name {string} and the description {string}", async function (name, description) {
    this.setName(name);
    this.setDescription(description);
});

When("I want to register a new promotion", async function () {
  var body = {};
  body.name = this.name;
  body.description = this.description;
  var data = {
      headers: { 'Content-Type': 'application/json', 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmRlYjlmOWIwNjk1OTM3NGM0ODdiYmYiLCJpYXQiOjE2MTA4NjQ0MTUsImV4cCI6MTYxMjA3NDAxNX0.KO1XTB-BzMR0lXy6DgYwfLiN51ce7wqKkeTUCxdNqf8' },
      json: true,
      body: body
  };
  const response = await got.post("http://localhost:3001/api/promotions", data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet save the new promotion", async function () {
  return assert.equal(this.number, 200);
});

Given("the promotion id {string}", async function (id) {
    this.setId(id);
});

When("I want to search a promotion", async function () {
  var data = {
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await got.get("http://localhost:3001/api/promotions/" + this.id, data);
  this.setNumber(response.statusCode)
})

Then("Smart-Vet show promotion details", async function () {
  return assert.equal(this.number, 200);
});

Then(/^Smart-Vet doesn't show promotion details$/, async function () {
  return assert.equal(this.number, 204);
});
