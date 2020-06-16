require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

describe("challenge5 suite", function(){
    this.timeout(20000);
    var driver;
    before(function () {
        driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
       driver.manage().window().maximize();
       
    });

    after(function () {
        return driver.quit();
    });
    it("Should open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
    it("Should run a search for 'PORSCHE'", async function() {
        var element = await driver.findElement(By.xpath('//form[@id="search-form"]//input'));
        return element.sendKeys("PORSCHE" + Key.ENTER)
    });
    // it("Should change the drop down for “Show Entries” to 100 from 20", async function() {
    //     await driver.wait(until.titleContains('PORSCHE'), 10000);
    //     console.log(await driver.getTitle());
    //     await driver.wait(until.elementIsNotVisible(driver.findElement(By.id("serverSideDataTable_processing"))))
    //     var model = array[i].getText();
    //     switch(model) {
    //         case "1": 
    //                 //do something for me
    //                 break; 
    //         case 2: 
    //                 //do second thing
    //                 break; 
    //         default: 
    //                 //whatever 
    //                 break;
            
    //             //array[i].getText() => Promise pending..... 
    //             //console.log(await[i].getText())

    //     }
    // });




    it("should assert that PORSCHE is in list of results", async function() {
        await driver.wait(until.titleContains('PORSCHE'), 10000);
        console.log(await driver.getTitle());
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))))
        var html = await driver.findElement(By.id("serverSideDataTable")).getAttribute('innerHTML');
        return assert.include(html, "PORSCHE")
    });

    it("Should change to show 100 results", async function(){
        var ment = await driver.findElement(By.xpath('//select[@name="serverSideDataTable_length"]'));
        await ment.click();
        ment.sendKeys("ENTER");
        ment.click();
        return driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing', 10000))));
        
    })

    // it("should loop through popular section and print link and name", async function() {
    //     var popular_array = await driver.findElements(webdriver.By.xpath("//div[@id='tabTrending']//a"));
    //     console.log(popular_array.length);
    //     for (var i=0; i<popular_array.length; i++){
    //         console.log(await popular_array[i].getText() +  " - " + await popular_array[i].getAttribute("href"));
    //     }
    // });
 
 
});
