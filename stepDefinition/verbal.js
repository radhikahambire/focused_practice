const { Given } = require("cucumber");
const verbalPage = require("../Pages/verbalPage");
const verbal = new verbalPage();

Given('Click on verbal', {timeout:60000}, function() {
    return verbal.clickOnVerbal();
})

Given('Check Answered Question-Type Specific Detail Questions tags functionality', {timeout:70000}, function() {
    return verbal.answeredquestion();
})

Given('Check Statement Agreed With-Type Specific Detail Questions cards functionality', {timeout:60000}, function() {
    return verbal.statementagreedwith();
});

Given('Check Single Highlighted Portion - Meaning Questions cards functionality', {timeout:60000}, function() {
    return verbal.meaningQuestion();
})

Given('Check Single Highlighted Portion - Function Questions cards functionality', {timeout:60000}, function() {
    return verbal.functionQuestion();
})

Given('Check Select the Sentence Questions cards functionality', {timeout:60000}, function() {
    return verbal.selectsectionQuestion();
})

//vaibhav
Given('Check standard specific details question functionality', {timeout:60000}, function() {
    return verbal.standardSpecificQuestionExit();
})

Given('Set attempted functionality', {timeout:60000}, function() {
    return verbal.VerbalAndQuantativeSet();
})

Given('Text Completion Single Blank Functionality', {timeout:600000}, function() {
    return verbal.TextCompletionSingleBlank();
})

Given('Primary Purpose Question Functionality', {timeout:600000}, function() {
    return verbal.primaryPurposeQuestion();
})

Given('Sentence Equivalance Functionality', {timeout:600000}, function() {
    return verbal.sentenceEquivalance();
})

Given('Strengthen-Weaken the Argument Questions Functionality', {timeout:600000}, function() {
    return verbal.strengthenWeakenArgumentQue();
})

Given('Double Highlighted Portion Functionality', {timeout:600000}, function() {
    return verbal.doubleHighlightedPortion();
})

Given('EXCEPT question functionality', {timeout:600000}, function() {
    return verbal.exceptQuestion();
})

Given('Check Answered Question-Type Specific Detail Questions tags functionality1', {timeout:600000}, function() {
    return verbal.AnsQueTypeSpecificDetailQueTag();
})

Given('Check Statement Agreed With-Type Specific Detail Questions cards functionality1', {timeout:600000}, function() {
    return verbal.statAgreedTypeSpecificDetailQue();
})

Given('Check Single Highlighted Portion - Meaning Questions cards functionality1', {timeout:600000}, function() {
    return verbal.singleHighPortionMeanQue();
})

Given('Single Highlighted Portion - Function Questions cards functionality1', {timeout:600000}, function() {
    return verbal.singleHighPortionFunQue();
})

Given('Check Select the Sentence Questions cards functionality1', {timeout:600000}, function() {
    return verbal.selectTheSentenceQue();
})

Given('Verbal Page Functionality', {timeout:600000}, function() {
    return verbal.verbalPageValidation();
})

Given('Verbal exit functionality', {timeout:600000}, function() {
    return verbal.verbalExit();
})




