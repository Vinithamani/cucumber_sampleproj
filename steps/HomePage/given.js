
// import { Given } from 'cucumber';
const Given = require('cucumber').Given;


// Given Scenario 1: To check the title of the Google page 
Given(/^I go to the website "([^"]*)"$/, (url) => {
    browser.url(url);
  });

//

//Scenario 2: To check search option in Google
// Given("A web browser is at the Google home page", () => {
  // browser.url("/");
// });