const fs = require("fs");
const mkdirp = require("mkdirp");
const reporter = require("cucumber-html-reporter");
const moment = require("moment");
// const html= "reports_" + moment().format("DD_MM_YYYY_HH_mm");
const htmlReports =  process.cwd() + "/reports/" + "/html";
const targetJson = process.cwd() + "/reports/" + "/json/cucumber_report.json";

const cucumberReporterOptions = {
    theme : "bootstrap",
    jsonFile : targetJson,
    output : "cucumber_report.html",
    reportSuiteAsScenarios : true
}

class Reporter {
    static createDirectory(dirName) {
        //Check if the directory exist
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }

    static creatHTMLReporter() {
        try{
            reporter.generate(cucumberReporterOptions);
        }
       catch(err){
            if(err){
                console.log("Failed to save ..!!");
                console.log(err);
            }
       }

    }
}

module.exports = Reporter;
