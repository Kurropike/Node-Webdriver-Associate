require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

describe("challenge5 suite", function(){
    this.timeout(20000);
    var driver;
    var models_array = []; 
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
    // it("Should run a search for 'PORSCHE'", async function() {
    //     var element = await driver.findElement(By.xpath('//form[@id="search-form"]//input'));
    //     return element.sendKeys("PORSCHE" + Key.ENTER)
    // });
 
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
        await ment.sendKeys("100");
        await ment.sendKeys("ENTER");
        await ment.click();
        return driver.wait(until.elementIsNotVisible(driver.findElement(By.id('serverSideDataTable_processing', 10000))));

    });
    it('should get Text and add to Array', async function(){
        // var models_array = []; 
        var array_elements = await driver.findElements(webdriver.By.xpath('//span[@data-uname="lotsearchLotmodel"]'));
        for (var i =0; i<array_elements.length; i++){
            // console.log(await array_elements[i].getText());
            models_array.push(await array_elements[i].getText())
        }

    });
    it("Sort the array", function(){
        sortedArray = models_array.sort();
    });
    it("Print everything in the sorted array", function(){
        for (var i =0; i<sortedArray.length; i++){
            console.log(sortedArray[i]);
        }
    });
    


    // it("Switch statement", function(){
    //     switch(models_array) {
    //                 case 1: 
    //                     text  //do something for me
    //                         break; 
    //                 case 2: 
    //                         //do second thing
    //                         break; 
    //                 default: 
    //                         //whatever 
    //                         break;
                    
    //                     //array[i].getText() => Promise pending..... 
    //                     //console.log(await[i].getText())
        
    //             }
    // });


 
 
});
