// Scenario: Testing login
const { browser } = require("protractor");
const { Given, When, Then } = require("cucumber");
const { eventually } = require("chai-as-promised");
const {  expect } = require("chai");
const loginPage = require("../Pages/focusPracticePage");
const login = new loginPage();

Given('Login into an application', {timeout:70000}, function () {
    return login.login();
});

Given('Click focused practice option', {timeout:70000}, function() {
    return login.focusedpractice();
});

Given('Click on view button of bookmarked questions', {timeout:70000}, function(){
    return login.bookmarkedquestions();
});

Given('Click on view button of my notes', {timeout:70000}, ()=>{
    return login.mynotes();
})
