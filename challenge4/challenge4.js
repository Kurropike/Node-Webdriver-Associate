require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

describe("challenge2gi suite", function(){
    this.timeout(20000);
    var driver;
    before(function () {
        driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
    });

    after(function () {
        return driver.quit();
    });
    it("Should open the copart website", function() {
        return driver.get("http://www.copart.com");
    });

    it("should loop through popular section and print link and name", async function() {
        var popular_array = await driver.findElements(webdriver.By.xpath("//div[@id='tabTrending']//a"));
        console.log(popular_array.length);
        for (var i=0; i<popular_array.length; i++){
            console.log(await popular_array[i].getText() +  " - " + await popular_array[i].getAttribute("href"));
        }
    });
 
 
});
