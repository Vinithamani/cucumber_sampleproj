const Then = require('cucumber').Then;
//var assert = require('assert').assert;
//const assert = require('assert').assert;
//let assert = require('assert');

console.log('then');


//Then Scenario 1: To check the title of the page
Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    console.log(title);
   // return expect(browser.getTitle()).to.eventually.equal(title);
   var a = browser.getTitle();
   if(a==title){
       console.log('the result is same');
   }
  
//    
    // 
  });










  
// Then(/^Links related to "(.*)" are shown on the results page$/ , keyword=> {
    // const links =$$(".LC20lb");
    // links.foreach(link => {
        // const linkText = link.getText().tolowerCase();
        // if(linkText){
            // assert(
                // linkText.includes(keyword),
                // 'link text dooes not include ${keyword}'
                // );
            // 
        // }
    // });
        // 
// });
 //Assert.assertEquals(browser.getTitle(), title);
 //expect(browser.getTitle()).to.eql(title);