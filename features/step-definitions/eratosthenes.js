const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, When, Then }) {
  
  Given('I have navigated to my website and clicked on the Eratosthenes project', function() {
    browser.url('http://alexkaufman06.github.io');
    const eratosthenesButton = $('.portfolio-item:nth-child(9)');
    eratosthenesButton.click();
    browser.pause(5000);
    const liveExampleLink = $('#portfolioModal6 > div > div.container > div > div > div > h3 > a');
    liveExampleLink.click();
    browser.pause(5000);
  });

  When('I enter in a value to count to of 15 and click the button', function () {

  });

  Then('I expect that the number of prime numbers returned is correct', function() {
    browser.deleteSession();
  });

});