const { browser } = require("protractor");
const { Given, When, Then } = require("cucumber");
const { eventually } = require("chai-as-promised");
const {  expect } = require("chai");
const quantitativePage = require("../Pages/quantitativePage");
const quant = new quantitativePage();

Given('Checking element present on quantitative page', {timeout:60000}, function() {
    return quant.checkallElementsOfQuantPage();
});

Given('Check data interpretation page functionality', {timeout:60000}, function() {
    return quant.dataInterpretation();
});

Given('Check Equation and inequalities page functionality', {timeout:60000}, function() {
    return quant.testEquationandInequalitiesPage();
})

Given('Check Function page functionality', {timeout:60000}, function() {
    return quant.testFunctionPage();
})

Given('Check Mixture page functionality', {timeout:60000}, function() {
    return quant.testMixturePage();
})

Given('Check Permutation and Combination page functionality', {timeout:60000}, function() {
    return quant.testPermutationCombinationPage();
})

Given('Check Plane geometry page functionality', {timeout:60000}, function() {
    return quant.testPlaneGeometryPage();
})

Given('Check Probability page functionality', {timeout:60000}, function() {
    return quant.testProbabilityPage();
})

Given('Check Sequuence and series page functionality', {timeout:60000}, function() {
    return quant.testSequenceandseriesPage();
})

Given('Check Speed distance and time page functionality', {timeout:60000}, function() {
    return quant.testSpeedDistanceTimePage();
})

Given('Check Surface area and volume page functionality', {timeout:60000}, function() {
    return quant.testSurfaceareaandvolumeTimePage();
})

Given('Check Work and time page functionality', {timeout:60000}, function() {
    return quant.testWorkAndTimePage();
})

Given('Click on back option functionality', {timeout:60000}, function() {
    return quant.clickBack();
})

//Vaibhav
Given('Check Quantative Exit Scenario functionality', {timeout:60000}, function() {
    return quant.quantExit();
});

Given('Check Surface area and volume page functionality1', {timeout:600000}, function() {
    return quant.surfaceAreaVolume();
});