require('chromedriver');
var webdriver = require('selenium-webdriver')

module.exports = {
    getDriver: getDriver,
    getDriver1: getDriver1
};

function getDriver (browser, rm, mobileType){

};

function getDriver1(){
    var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.manage().window().maximize();
    return driver;
}