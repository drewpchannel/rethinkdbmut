const fs = require('fs');
const puppeteer = require('puppeteer');
const checkDuplicates = require('./index.js');

function TheMUTMarket() {
  //enter name
  let name = "The MUT Market";
  let pricePs = null;
  let pricePc = null;
  let priceXb = null;
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    //enter new address
    const response = await page.goto('https://www.themutmarket.com/products/pc-19');
    let anything = await response.text();
    //newSearchTerm
    let priceLocation = anything.indexOf('<option class="NumberWithCurrency hide"><span class=money>');
    //length of search term + 1
    const lengthOfSearchText = 59;
    //multiplier, so price is for 100k
    const multiplier = 10;
    let price = '';
    for(let x = 0; x < 5; x++) {
      let currIndex = anything.charAt(priceLocation + lengthOfSearchText + x)
      if (isNaN(currIndex) === false || currIndex === '.') {
        //character at end of price
        if(currIndex === ' ' || currIndex === '.') {
        } else {
          price = price.concat('', currIndex) 
        };
      }
    }
    price = parseInt(price);
    price = (price * multiplier / 100).toFixed(2);
    browser.close();
    pricePc = price;
  });
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    //enter new address
    const response = await page.goto('https://www.themutmarket.com/products/playstation-19');
    let anything = await response.text();
    //newSearchTerm
    let priceLocation = anything.indexOf('<option class="NumberWithCurrency hide"><span class=money>');
    //length of search term + 1
    const lengthOfSearchText = 59;
    //multiplier, so price is for 100k
    const multiplier = 10;
    let price = '';
    for(let x = 0; x < 5; x++) {
      let currIndex = anything.charAt(priceLocation + lengthOfSearchText + x)
      if (isNaN(currIndex) === false || currIndex === '.') {
        //character at end of price
        if(currIndex === ' ' || currIndex === '.') {
        } else {
          price = price.concat('', currIndex) 
        };
      }
    }
    price = parseInt(price);
    price = (price * multiplier / 100).toFixed(2);
    browser.close();
    pricePs = price;
  });
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    //enter new address
    const response = await page.goto('https://www.themutmarket.com/products/xbox-19');
    let anything = await response.text();
    //newSearchTerm
    let priceLocation = anything.indexOf('<option class="NumberWithCurrency hide"><span class=money>');
    //length of search term + 1
    const lengthOfSearchText = 59;
    //multiplier, so price is for 100k
    const multiplier = 10;
    let price = '';
    for(let x = 0; x < 5; x++) {
      let currIndex = anything.charAt(priceLocation + lengthOfSearchText + x)
      if (isNaN(currIndex) === false || currIndex === '.') {
        //character at end of price
        if(currIndex === ' ' || currIndex === '.') {
        } else {
          price = price.concat('', currIndex) 
        };
      }
    }
    price = parseInt(price);
    price = (price * multiplier / 100).toFixed(2);
    priceXb = price;
    browser.close().then(value =>{
      checkDuplicates(name, pricePs, pricePc, priceXb);
    })
  });
}

TheMUTMarket();