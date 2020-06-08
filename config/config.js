// var path = require("path");
var Reporter = require("../Support/reporter");
//To generate report based on time and date
const moment = require("moment");
// var htmlReports= "reports_" + moment().format("DD_MM_YYYY_HH_mm");
var jsonReports = process.cwd() + "/reports/" + "/json";

exports.config = {
//     chromeDriver: "/home/iauro-qa004/Downloads/chromedriver",
//     seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../feature/*.feature"],

    baseUrl: 'http://www.way2automation.com/angularjs-protractor/registeration/#/login',
    capabilities:{
        browserName: "chrome",
        chromeOptions: {
            args: [
                // disable chrome's infobar
                '--disable-infobars', '--headless',
                '--no-sandbox' // Chrome won't be able to startup. then this option is used
            ]
        }
    },
    useAllAngular2AppRoots: true,
    framework:'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    // resultJsonOutputFile: 'report.json',
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        require('babel-register');
        Reporter.createDirectory(jsonReports);

    },

    cucumberOpts:{
        strict : true,
        format : 'json:./reports' + '/json/focused_practice_report.json',
        require: ['../stepDefinition/*.js'],
        // format:'pretty',
        tags: false
    },
    onComplete : function () {
        Reporter.creatHTMLReporter();
    }

};
