require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

describe("challenge5 suite", function(){
    this.timeout(20000);
    var driver;
    var array; 
    var sorted_array;
    before(function () {
        driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
       driver.manage().window().maximize();
       
    });

    after(function () {
        return driver.quit();
    });

    it("create array of Data", function(){
        array = ['one', 'two', 'fouyr','five','eight', 'ten', '1'];
    });

    it("Print everything in the array", function(){
        for (var i =0; i<array.length; i++){
            console.log(array[i]);
        }
    });

    it("Sort the array", function(){
        sorted_array = array.sort();
    });

    it("Print everything in the sorted array", function(){
        for (var i =0; i<sorted_array.length; i++){
            console.log(sorted_array[i]);
        }
    });
    var models_array = []; 
    var array_elements = await driver.findElements("element");
    for (var i =0; i<array_elements.length; i++){
        console.log(await array_elements[i].getText());
        models_array.push(await array_elements[i].getText())
    }

});