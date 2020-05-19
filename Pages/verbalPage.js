const elementHelper = require("../Support/ElementHelperjs");
const support = new elementHelper();
const chai = require('chai');
let expect = chai.expect;

class VerbalPage {
    constructor() {
        // Verbal button css 
        this.verbal = element(by.css("app-homework-student-dashboard > div > mat-card > div > app-iro-button:nth-child(2) > button"));
        this.okBtn = element(by.css("app-vocab-popup > div > div > div:nth-child(4) > app-iro-button:nth-child(2) > button"));
        this.que_1_submit = element(by.css("app-practice-question-container > div > div > div > div > div > mat-card:nth-child(2) > div >div:nth-child(2) > div > div:nth-child(3) > app-iro-button > button"));
        this.que_1_next_questionBtn = element(by.css("app-practice-question-container > div > div > div > div > div > mat-card:nth-child(2) > div >div:nth-child(3) > div > div:nth-child(3) > app-iro-button > button"));
        this.que_2_submit = element(by.css("app-practice-question-container > div > div > div > div > div > div:nth-child(1) > mat-card:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(3) > app-iro-button > button"));
        this.que_2_next_questionBtn = element(by.css("app-practice-question-container > div > div > div > div > div > div:nth-child(1) > mat-card:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(3) > app-iro-button > button"));
        this.backoption_score = element(by.xpath("//app-home/mat-drawer-container/mat-drawer-content/div/div/div/mat-toolbar/mat-toolbar-row/div[1]"));
        this.title = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(1) > p "));

        this.question_num = element(by.css("app-test-header > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p"));
        this.session_score = element(by.css("app-homework >app-homework-result-container > div > mat-card:nth-child(1) > div:nth-child(1) > p"));

        // Retake popup meassage
        this.retake_popup_msg = element(by.css("app-dont-show > div > mat-card  > div > div:nth-child(2) > div > p"));
        this.no_btn = element(by.css("app-dont-show > div > mat-card  > div > div:nth-child(3) > app-iro-button:nth-child(1) > button"));
        this.yes_btn = element(by.css("app-dont-show > div > mat-card  > div > div:nth-child(3) > app-iro-button:nth-child(2) > button"))
        this.your_ans = element(by.css("app-practice-question-container > div > div > div > div > div > div > mat-card:nth-child(2) > div:nth-child(1) > div:nth-child(3) > app-iro-button:nth-child(1) > button"));

        // Reading Comprehension css
            //Answered Question-Type Specific Detail Questions card's css
            this.question_1 = element(by.css("div > mat-card:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > div:nth-child(2)"));
            this.question_2 = element(by.css("div > mat-card:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"));
            this.question_3 = element(by.css("div > mat-card:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"));
            this.question_4 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(2) > div > div.cbt-radio-unfill.pointer"))
            this.question_5 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(3) > div > div.cbt-radio-unfill.pointer"))
            this.question_6 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
            this.question_7 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
            this.question_8 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
            this.question_9 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
            this.question_10 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
            this.question_11 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
            // Specific Detail Questions
            // 1.Attempt button css of Specific Detail Questions 
            this.type_specific_detail_questions_attempt = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div > app-iro-button > button"));
                                                                        //#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div > app-iro-button > button
                                                                        //div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button
            this.statement_agreed_with_attempt = element(by.css("div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.standard_specific_detail_questions_attempt = element(by.css("div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            
            // 2.Vocabulory button css of Specific Detail Questions 
            this.standard_specific_detail_questions_vocabulory = element(by.css("div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.type_specific_detail_questions_vocabulory = element(by.css("div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.statement_agreed_with_vocabulory = element(by.css("div:nth-child(1) > div:nth-child(2) > div > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));

            // Special Format Specific Detail Questions
            // 1. Attempt button css of Special Format Specific Detail Questions
            this.except_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.triple_true_false_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            
            // 2. Vocabulory button css of Special Format Specific Detail Questions
            this.except_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.triple_true_false_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));

            // Highlighted Portion Questions
            // 1. Attempt button css of Single Highlighted Portion - Meaning Questions
            this.single_highlighted_portion_meaning_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.single_highlighted_portion_function_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.double_highlighted_portion_function_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.select_the_sentence_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(4) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));

            // 2. Vocabulory button css of Single Highlighted Portion - Meaning Questions
            this.single_highlighted_portion_meaning_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.single_highlighted_portion_function_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.double_highlighted_portion_function_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.select_the_sentence_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(4) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));

            // Critical Reasoning Questions
            // Attempt button css of Critical Reasoning Questions
            this.strengthen_weaken_the_argument_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.find_the_conclusion_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.resolve_the_discrepancy_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.similar_reasoning_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(4) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.inference_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(5) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"))
            
            // Vocabulory button css of Critical Reasoning Questions
            this.strengthen_weaken_the_argument_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.find_the_conclusion_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.resolve_the_discrepancy_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.similar_reasoning_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(4) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
            this.inference_questions_vocabulory = element(by.css("div:nth-child(1) >div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(5) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));

            // General Questions
            // 1. Primary Purpose Questions
            this.primary_purpose_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.main_point_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
            this.best_title_questions_attempt = element(by.css("div:nth-child(1) >div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(2) > app-iro-button > button"));
        
        // Discrete Questions
            // Sentence Equivalence
        this.exitButton = element(by.xpath("//p[contains(text(),'Exit')]"))
        this.retakeButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(1) > div:nth-child(3) > div > app-iro-button > button > span"))
        this.attemptButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(10) > div:nth-child(3) > div > app-iro-button > button > span"))
        this.resumeButton = element(by.xpath("//span[contains(text(),'Resume')]"))
        this.checkboxvb = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.radioButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(2) > div > div.cbt-radio-unfill.pointer"))
        this.mobile_number = element(by.css("#mat-input-0"));
        this.password = element(by.css("#mat-input-1"));
        this.loginBtn = element(by.css("#loginWrapper > div > section:nth-child(2) > div.loginData > div > app-iro-button > button"));
        this.quantitativeButton = element(by.xpath("//span[contains(text(),'Quantitative')]"))
        this.exitSession = element(by.xpath("//span[contains(text(),'Exit Session')]"))
        
        this.focussPractice = element(by.xpath("//p[contains(text(),'Focused Practice')]"))
        this.logoutIcon = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-user-profile.pointer"))
        this.logoutClick = element(by.xpath("//button[contains(text(),'Logout')]"))

        this.filterIcon = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > mat-card.test-list.mat-card > div.header > div"))
        this.selectVerbal = element(by.css("#cdk-overlay-0 > div > div > div:nth-child(2) > button"))
        this.selectQuant = element(by.css("#cdk-overlay-0 > div > div > div:nth-child(3) > button"))
        this.dragforVerbal = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > mat-card.test-list.mat-card > div.score-table-body.ng-star-inserted > div:nth-child(6) > div:nth-child(1)"))
        this.dragforQuant = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > mat-card.test-list.mat-card > div.score-table-body.ng-star-inserted > div:nth-child(9) > div:nth-child(2)"))

        this.focussPracticeLabel = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > p"))
        this.selectPracticeLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > mat-card.homework-attempt.mat-card > p"))
        this.bookmarkQueLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div.header.header-separator-bottom-light > p"))
        this.myNotesLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div.header.header-separator-bottom-light > p"))
        this.singleBlankAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[2]/div[2]/div[1]/mat-card[1]/div[2]/div/app-iro-button/button"))
        this.singleBlankAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div > div:nth-child(1)"))
        this.singleBlankAns11 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > p"))
        this.singleBlankSubmit = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.singleBlankCorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > mat-card.option-container.mat-card > div > div:nth-child(2) > app-iro-button:nth-child(2) > button > span"))
        this.singleBlankNextQue = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.singleBlankGoToReview = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.sessionScoreLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div.header-separator-bottom-light > p"))
        this.sessionDuration = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(1) > p.value"))
        this.correctAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(2) > p.value"))
        this.incorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(3) > p.value"))
        this.dragforSingleBlank = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.cbt-question-list-body-container.mat-card > div.cbt-question-list-table-body.header-separator-bottom-light.ng-star-inserted > div:nth-child(11) > div:nth-child(2) > p"))
        this.backClick = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted"))
        this.readingCompreLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > p"))
         this.focussPracticeYes = element(by.css("#mat-dialog-0 > app-dont-show > div > mat-card > div > div.section-warning-action > app-iro-button:nth-child(2) > button"))

         this.primaryPurposeQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[5]/div[1]/mat-card[1]/div[2]/div/app-iro-button/button"))
        this.primaryPurposeQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.primaryPurposeQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.primaryPurposeSubmit = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.primaryPurposeCorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div:nth-child(3) > app-iro-button:nth-child(2) > button"))
        this.primaryPurposeNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.primaryPurposeGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
    
        this.sentenceEquivalanceAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[2]/div[1]/div[1]/mat-card/div[2]/div/app-iro-button/button"))
        this.sentenceEquivalanceAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
        this.sentenceEquivalanceAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1)"))
        this.sentenceEquivalanceSubmit = element(by.xpath("//span[contains(text(),'Submit')]"))
        this.sentenceEquivalanceCorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > mat-card.option-container.mat-card > div > div:nth-child(2) > app-iro-button:nth-child(2) > button"))
        this.sentenceEquivalanceNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.sentenceEquivalanceGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
        this.dragforSentenceEqui = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.cbt-question-list-body-container.mat-card > div.cbt-question-list-table-body.header-separator-bottom-light.ng-star-inserted > div:nth-child(12) > div:nth-child(2)"))
        this.dragforSentenceEqui1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.cbt-question-list-body-container.mat-card > div.cbt-question-list-table-body.header-separator-bottom-light.ng-star-inserted > div:nth-child(11) > div:nth-child(2) > p"))
    
        this.StrengthenWeakenArgQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[4]/div[1]/mat-card[1]/div[2]/div/app-iro-button/button"))
        this.StrengthenWeakenArgQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
        this.StrengthenWeakenArgQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(2) > div > div.cbt-radio-unfill.pointer"))
        this.StrengthenWeakenArgQueAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(2) > div > p"))
        this.StrengthenWeakenArgQueAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(2) > div.pointer.cbt-checkbox-unfill"))

        this.dragForStrengthenWeakenArg = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.cbt-question-list-body-container.mat-card > div.cbt-question-list-table-body.header-separator-bottom-light.ng-star-inserted > div:nth-child(11) > div:nth-child(2)"))
        this.dragForStrengthenWeakenArg1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.cbt-question-list-body-container.mat-card > div.cbt-question-list-table-body.header-separator-bottom-light.ng-star-inserted > div:nth-child(11) > div:nth-child(2) > p"))
        this.StrengthenWeakenArgSubmit = element(by.xpath("//span[contains(text(),'Submit')]"))
        this.StrengthenWeakenArgCorrectAns = element(by.xpath("//span[contains(text(),'Correct answer')]"))
        this.StrengthenWeakenArgNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.StrengthenWeakenArgGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
        this.StrengthenWeakenArgSubmit1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.StrengthenWeakenArgCorrectAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div:nth-child(3) > app-iro-button:nth-child(2) > button"))
        this.StrengthenWeakenArgNextQue1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        
        this.doubleHightlightedPortionAtt = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(3) > div:nth-child(3) > div > app-iro-button > button"))
        this.doubleHightlightedPortionAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.doubleHightlightedPortionAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(2) > div > p"))
        this.doubleHightlightedPortionSubmit = element(by.xpath("//span[contains(text(),'Submit')]"))
        this.doubleHightlightedPortionCorrectAns = element(by.xpath("//span[contains(text(),'Correct answer')]"))
        this.doubleHightlightedPortionNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.doubleHightlightedPortionGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
        
        this.exceptQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[2]/div[1]/mat-card[1]/div[2]/div/app-iro-button/button"))
        this.exceptQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.exceptQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.exceptQueSubmit = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.exceptQueCorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div:nth-child(3) > app-iro-button:nth-child(2) > button"))
        this.exceptQueNextQue = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        this.exceptQueGoToReview = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div.preview-question-body > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button > button"))
        
        //Answered Question-Type Specific Detail Questions
        this.AnsQueTypeSpecificDetailQueTagAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[1]/div[1]/mat-card[2]/div[2]/div/app-iro-button/button"))
        this.AnsQueTypeSpecificDetailQueTagAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.AnsQueTypeSpecificDetailQueTagAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.AnsQueTypeSpecificDetailQueTagSubmit = element(by.xpath("//span[contains(text(),'Submit')]"))
        this.AnsQueTypeSpecificDetailQueTagCorrectAns = element(by.xpath("//span[contains(text(),'Correct answer')]"))
        this.AnsQueTypeSpecificDetailQueTagNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.AnsQueTypeSpecificDetailQueTagGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
        this.AnsQueTypeSpecificDetailQueTagAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
        this.AnsQueTypeSpecificDetailQueTagAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(1) > p"))
        this.AnsQueTypeSpecificDetailQueTagAns4 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.AnsQueTypeSpecificDetailQueTagAns5 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > p"))

        //Check Statement Agreed With-Type Specific Detail Questions cards functionality1
        this.statAgreedTypeSpecificDetailQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[1]/div[1]/mat-card[3]/div[2]/div/app-iro-button/button"))
        this.statAgreedTypeSpecificDetailQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.statAgreedTypeSpecificDetailQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.statAgreedTypeSpecificDetailQueSubmit = element(by.xpath(""))
        this.statAgreedTypeSpecificDetailQueCorrectAns = element(by.xpath(""))
        this.statAgreedTypeSpecificDetailQueNextQue = element(by.xpath(""))
        this.statAgreedTypeSpecificDetailQueGoToReview = element(by.xpath(""))
        this.statAgreedTypeSpecificDetailQueAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.statAgreedTypeSpecificDetailQueAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > p"))
        
        //Check Single Highlighted Portion - Meaning Questions cards functionality1
        this.singleHighPortionMeanQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[3]/div[1]/mat-card[1]/div[2]/div/app-iro-button/button"))
        this.singleHighPortionMeanQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.singleHighPortionMeanQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.singleHighPortionMeanQueSubmit = element(by.css(""))
        this.singleHighPortionMeanQueCorrectAns = element(by.css(""))
        this.singleHighPortionMeanQueNextQue = element(by.css(""))
        this.singleHighPortionMeanQueGoToReview = element(by.css(""))
        this.singleHighPortionMeanQueAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.singleHighPortionMeanQueAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > p"))
        
        //Single Highlighted Portion - Function Questions cards functionality1
        this.singleHighPortionFunQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[3]/div[1]/mat-card[2]/div[2]/div/app-iro-button/button"))
        this.singleHighPortionFunQueAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > div.cbt-radio-unfill.pointer"))
        this.singleHighPortionFunQueAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(2) > div > div > div:nth-child(1) > div > p"))
        this.singleHighPortionFunQueAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.singleHighPortionFunQueAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > p"))
        
        //Check Select the Sentence Questions cards functionality1
        this.selectTheSentenceQueAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div[1]/div[3]/div[1]/mat-card[4]/div[2]/div/app-iro-button/button"))
        this.selectTheSentenceQueAns = element(by.xpath("//*[@id='targetPassagePractice']//span[@id='mSpan0']"))
        this.selectTheSentenceQueAns1 = element(by.xpath("//*[@id='targetPassagePractice']//span[@id='mSpan1']"))
        this.selectTheSentenceQueAns2 = element(by.xpath("//*[@id='targetPassagePractice']//span[@id='mSpan2']"))
        this.selectTheSentenceQueAns3 = element(by.xpath("//*[@id='targetPassagePractice']//span[@id='mSpan3']"))
        this.selectTheSentenceQueAns4 = element(by.xpath("//*[@id='targetPassagePractice']//span[@id='mSpan4']"))
        this.selectTheSentenceQueAns6 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.selectTheSentenceQueAns7 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > p"))
        this.selectTheSentenceQueAns8 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body-vr > div:nth-child(1) > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        
        //Validate the Verbal Page
        this.usernamelabel = element(by.css("#CbtTemplateWrapper > app-report > app-report-dashboard > div > app-student-dashboard > div > div:nth-child(1) > div:nth-child(1) > app-student-basic-info > div > mat-card > div > div.basic-info-body.ng-star-inserted > div > div:nth-child(1) > div:nth-child(1) > p.info-data"))
        this.verbalReasoningLabel = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > p"))
        this.ssdqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(1) > p"))
        this.aqtsdqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.sawtsdqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(3) > p"))
        this.eqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(1) > p"))
        this.ttfqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.shpmqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(1) > p"))
        this.shpfqcard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.dhpfqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(3) > p"))
        this.stsqcard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > mat-card:nth-child(4) > p"))
        this.swtaqcard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(1) > p"))
        this.ftcqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.rtdqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(3) > p"))
        this.srqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(4) > p"))
        this.iqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > mat-card:nth-child(5) > p"))
        this.ppqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(1)"))
        this.mpqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.btqCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > mat-card:nth-child(3) > p"))
        this.seCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > mat-card > p"))
        this.sbCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(1) > p"))
        this.dbcard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(2) > p"))
        this.tbCard = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > mat-card:nth-child(3) > p"))
        this.scrollToSeeVerbal = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-dashboard > div > app-homework-student-dashboard > div > mat-card.test-list.mat-card > div.score-table-body.ng-star-inserted > div:nth-child(20) > div:nth-child(1)"))
        
    }
    async clickOnVerbal() {
        support.waitForParticularElement(2000, this.verbal);
        this.verbal.click();

        let attemptBtn;
        // Check Ok button is present or not 
        const ispresent = await this.okBtn.isPresent();
        if(ispresent) {
            support.waitForParticularElement(2000,this.okBtn);
            this.okBtn.click();
            support.waitForParticularElement(2000, this.type_specific_detail_questions_attempt);
            attemptBtn = await this.type_specific_detail_questions_attempt.getText();
        }
        else {
            support.waitForParticularElement(2000, this.type_specific_detail_questions_attempt);
            attemptBtn = await this.type_specific_detail_questions_attempt.getText();
        }        
        return console.log(attemptBtn);
    }




    async answeredquestion () {
        support.waitForParticularElement(2000, this.type_specific_detail_questions_attempt);
        const attemptBtn = await this.type_specific_detail_questions_attempt.getText();
        if(attemptBtn === 'Attempt') {
            console.log("Attempt button is present")
            browser.sleep(2000);
            this.type_specific_detail_questions_attempt.click();
            browser.sleep(2000);
                const isPresent4 = await this.question_2.isPresent();

                if(isPresent4) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
                    
                    support.waitForParticularElement(2000, this.que_2_submit);
                    this.que_2_submit.click();
                    
                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    this.que_2_next_questionBtn.click();  
                    
                    browser.sleep(2000);
                    const ispresent = await this.question_1.isPresent();
                    if(ispresent) {
                        support.waitForParticularElement(2000, this.question_1);
                        this.question_1.click();
        
                        support.waitForParticularElement(2000,this.que_1_submit);
                        this.que_1_submit.click();
        
                        support.waitForParticularElement(2000, this.que_1_next_questionBtn);
                        this.que_1_next_questionBtn.click();
        
                        browser.sleep(2000);
                        const isPresent1 = await this.question_2.isPresent();
                        if(isPresent1) {
                            support.waitForParticularElement(2000, this.question_2);
                            this.question_2.click();
        
                            support.waitForParticularElement(2000, this.que_2_submit);
                            this.que_2_submit.click();
        
                            support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                            this.que_2_next_questionBtn.click();
        
                            browser.sleep(2000);
                            const isPresent2 = await this.question_2.isPresent();
                            if(isPresent2) {
                                support.waitForParticularElement(2000, this.question_2);
                                this.question_2.click();
            
                                support.waitForParticularElement(2000, this.que_2_submit);
                                this.que_2_submit.click();
            
                                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                this.que_2_next_questionBtn.click();
        
                                browser.sleep(2000);
                                const isPresent3 = await this.question_2.isPresent();
                                if(isPresent3) {
                                    support.waitForParticularElement(2000, this.question_2);
                                    this.question_2.click();
                
                                    support.waitForParticularElement(2000, this.que_2_submit);
                                    this.que_2_submit.click();
                
                                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                    this.que_2_next_questionBtn.click();
        
                                    browser.sleep(2000);
                                    const isPresent5 = await this.question_2.isPresent();
                                    if(isPresent5)  {

                                        support.waitForParticularElement(2000, this.question_2);
                                    this.question_2.click();
                
                                    support.waitForParticularElement(2000, this.que_2_submit);
                                    this.que_2_submit.click();
                
                                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                    this.que_2_next_questionBtn.click();
        
                                    browser.sleep(2000);
                                    const isPresent6 = await this.question_2.isPresent();

                                    }
                                    
                                    support.waitForParticularElement(2000, this.backoption_score);
                                    this.backoption_score.click();
        
                                    support.waitForParticularElement(2000,this.type_specific_detail_questions_attempt);
        
                                    browser.sleep(2000);
                                }
                                else {
                                        console.log("Question not present..");
                                }
                                
                            }
                            else {
                                console.log("Question not present..");
                            }
                                
                            }
                            else {
                                console.log("Question not present..");
                            }
                    }
                    else {
                        console.log("Question not present..");
                    }    
                                        
                }
                else {
                    console.log("Question not present..");
                }
        }
        else if(attemptBtn === 'Resume') {
            console.log("Resume button is present");
            this.type_specific_detail_questions_attempt.click();
            browser.sleep(2000);
            const isPresent4 = await this.question_2.isPresent();
            if(isPresent4) {
                support.waitForParticularElement(2000, this.question_2);
                this.question_2.click();
                
                support.waitForParticularElement(2000, this.que_2_submit);
                this.que_2_submit.click();
                
                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                this.que_2_next_questionBtn.click();  
                
                browser.sleep(2000);
                const ispresent = await this.question_1.isPresent();
                if(ispresent) {
                    support.waitForParticularElement(2000, this.question_1);
                    this.question_1.click();
    
                    support.waitForParticularElement(2000,this.que_1_submit);
                    this.que_1_submit.click();
    
                    support.waitForParticularElement(2000, this.que_1_next_questionBtn);
                    this.que_1_next_questionBtn.click();
    
                    browser.sleep(2000);
                    const isPresent1 = await this.question_2.isPresent();
                    if(isPresent1) {
                        support.waitForParticularElement(2000, this.question_2);
                        this.question_2.click();
    
                        support.waitForParticularElement(2000, this.que_2_submit);
                        this.que_2_submit.click();
    
                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        this.que_2_next_questionBtn.click();
    
                        browser.sleep(2000);
                        const isPresent2 = await this.question_2.isPresent();
                        if(isPresent2) {
                            support.waitForParticularElement(2000, this.question_2);
                            this.question_2.click();
        
                            support.waitForParticularElement(2000, this.que_2_submit);
                            this.que_2_submit.click();
        
                            support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                            this.que_2_next_questionBtn.click();
    
                            browser.sleep(2000);
                            const isPresent3 = await this.question_2.isPresent();
                            if(isPresent3) {
                                support.waitForParticularElement(2000, this.question_2);
                                this.question_2.click();
            
                                support.waitForParticularElement(2000, this.que_2_submit);
                                this.que_2_submit.click();
            
                                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                this.que_2_next_questionBtn.click();
    
                                support.waitForParticularElement(2000, this.backoption_score);
                                this.backoption_score.click();
    
                                support.waitForParticularElement(2000,this.type_specific_detail_questions_attempt);
    
                                browser.sleep(2000);
                            }
                            else {
                                    console.log("Question not present..");
                            }
                            
                        }
                        else {
                            console.log("Question not present..");
                        }
                            
                        }
                        else {
                            console.log("Question not present..");
                        }
                }
                else {
                    console.log("Question not present..");
                }    
                                    
            }
            else {
                console.log("Question not present..");
            }
            const isPresent1 = await this.question_2.isPresent();
            if(isPresent1) {
                support.waitForParticularElement(2000, this.question_2);
                this.question_2.click();

                support.waitForParticularElement(2000, this.que_2_submit);
                this.que_2_submit.click();

                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                this.que_2_next_questionBtn.click();

                browser.sleep(2000);
                const isPresent2 = await this.question_2.isPresent();
                if(isPresent2) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
    
                    support.waitForParticularElement(2000, this.que_2_submit);
                    this.que_2_submit.click();
    
                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    this.que_2_next_questionBtn.click();

                    browser.sleep(2000);
                    const isPresent3 = await this.question_2.isPresent();
                    if(isPresent3) {
                        support.waitForParticularElement(2000, this.question_2);
                        this.question_2.click();
        
                        support.waitForParticularElement(2000, this.que_2_submit);
                        this.que_2_submit.click();
        
                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        this.que_2_next_questionBtn.click();
                            
                        browser.sleep(2000);
                        const isPresent4 = await this.question_2.isPresent();
                        if(isPresent4) {
                            support.waitForParticularElement(2000, this.question_2);
                            this.question_2.click();
            
                            support.waitForParticularElement(2000, this.que_2_submit);
                            this.que_2_submit.click();
            
                            support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                            this.que_2_next_questionBtn.click();

                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();

                            support.waitForParticularElement(2000,this.type_specific_detail_questions_attempt);
                                
                        }
                        else {
                                console.log("Question not present..");
                        }
                    }
                    else {
                            console.log("Question not present..");
                    }
                        
                }
                else {
                    console.log("Question not present..");
                }
            }
            else {
                console.log("Question not present..");
            }
        }



        else {
            console.log("Retake button is present");
            this.type_specific_detail_questions_attempt.click();
            browser.sleep(2000);
            const ispopup = await this.retake_popup_msg.isPresent();
            if(ispopup) {
                //Checking popup is present or not
                support.waitForParticularElement(2000, this.retake_popup_msg);
                const is_retake_popup = await this.retake_popup_msg.getText();
                expect(is_retake_popup).equal("Are you sure you want to retake the set? You will lose the previous record for the set.");

                // Checking yes button is present on popup
                support.waitForParticularElement(2000, this.yes_btn);
                const is_yes_btn = await this.yes_btn.getText();
                expect(is_yes_btn).equal("Yes");
                this.yes_btn.click();
                console.log("Popup message is ::", is_retake_popup);

                browser.sleep(2000);
                const isPresent4 = await this.question_2.isPresent();
                if(isPresent4) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
                    
                    support.waitForParticularElement(2000, this.que_2_submit);
                    this.que_2_submit.click();
                    
                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    this.que_2_next_questionBtn.click();  
                    
                    browser.sleep(2000);
                    const ispresent = await this.question_1.isPresent();
                    if(ispresent) {
                        support.waitForParticularElement(2000, this.question_1);
                        this.question_1.click();
        
                        support.waitForParticularElement(2000,this.que_1_submit);
                        this.que_1_submit.click();
        
                        support.waitForParticularElement(2000, this.que_1_next_questionBtn);
                        this.que_1_next_questionBtn.click();
        
                        browser.sleep(2000);
                        const isPresent1 = await this.question_2.isPresent();
                        if(isPresent1) {
                            support.waitForParticularElement(2000, this.question_2);
                            this.question_2.click();
        
                            support.waitForParticularElement(2000, this.que_2_submit);
                            this.que_2_submit.click();
        
                            support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                            this.que_2_next_questionBtn.click();
        
                            browser.sleep(2000);
                            const isPresent2 = await this.question_2.isPresent();
                            if(isPresent2) {
                                support.waitForParticularElement(2000, this.question_2);
                                this.question_2.click();
            
                                support.waitForParticularElement(2000, this.que_2_submit);
                                this.que_2_submit.click();
            
                                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                this.que_2_next_questionBtn.click();
        
                                browser.sleep(2000);
                                const isPresent3 = await this.question_2.isPresent();
                                if(isPresent3) {
                                    support.waitForParticularElement(2000, this.question_2);
                                    this.question_2.click();
                
                                    support.waitForParticularElement(2000, this.que_2_submit);
                                    this.que_2_submit.click();
                
                                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                    this.que_2_next_questionBtn.click();
        
                                    support.waitForParticularElement(2000, this.backoption_score);
                                    this.backoption_score.click();
        
                                    support.waitForParticularElement(2000,this.type_specific_detail_questions_attempt);
        
                                    browser.sleep(2000);
                                }
                                else {
                                        console.log("Question not present..");
                                }
                                
                            }
                            else {
                                console.log("Question not present..");
                            }
                                
                            }
                            else {
                                console.log("Question not present..");
                            }
                    }
                    else {
                        console.log("Question not present..");
                    }    
                                        
                }
                else {
                    console.log("Question not present..");
                }

                const isPresent1 = await this.question_2.isPresent();
                if(isPresent1) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    this.que_2_next_questionBtn.click();

                    browser.sleep(2000);
                    const isPresent2 = await this.question_2.isPresent();
                    if(isPresent2) {
                        support.waitForParticularElement(2000, this.question_2);
                        this.question_2.click();
        
                        support.waitForParticularElement(2000, this.que_2_submit);
                        this.que_2_submit.click();
        
                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        this.que_2_next_questionBtn.click();

                        browser.sleep(2000);
                        const isPresent3 = await this.question_2.isPresent();
                        if(isPresent3) {
                            support.waitForParticularElement(2000, this.question_2);
                            this.question_2.click();
            
                            support.waitForParticularElement(2000, this.que_2_submit);
                            this.que_2_submit.click();
            
                            support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                            this.que_2_next_questionBtn.click();
                                
                            browser.sleep(2000);
                            const isPresent4 = await this.question_2.isPresent();
                            if(isPresent4) {
                                support.waitForParticularElement(2000, this.question_2);
                                this.question_2.click();
                
                                support.waitForParticularElement(2000, this.que_2_submit);
                                this.que_2_submit.click();
                
                                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                                this.que_2_next_questionBtn.click();

                                support.waitForParticularElement(2000, this.backoption_score);
                                this.backoption_score.click();

                                support.waitForParticularElement(2000,this.type_specific_detail_questions_attempt);
                                    
                            }
                            else {
                                    console.log("Question not present..");
                            }
                        }
                        else {
                                console.log("Question not present..");
                        }
                            
                    }
                    else {
                        console.log("Question not present..");
                    }
                }
                else {
                    console.log("Question not present..");
                }
            }
        }
        return console.log("Button is ::" + attemptBtn);

        // return console.log("Button is ::" + attemptBtn)        
    }
    async statementagreedwith() {
        support.waitForParticularElement(2000, this.type_specific_detail_questions_attempt);
        const attemptBtn = await this.statement_agreed_with_attempt.getText();
        if(attemptBtn === 'Attempt') {
            console.log("Attempt button is present")
            this.statement_agreed_with_attempt.click();
            browser.sleep(2000);
            const isPresent4 = await this.question_2.isPresent();

            if(isPresent4) {
                support.waitForParticularElement(2000, this.question_2);
                this.question_2.click();
                    
                support.waitForParticularElement(2000, this.que_2_submit);
                this.que_2_submit.click();
                    
                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                this.que_2_next_questionBtn.click();

                support.waitForParticularElement(2000, this.question_2);
                const present = await this.question_2.isPresent();

                if(present) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
                        
                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();
                      
                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");
                }
            }
        }
        else if(attemptBtn === 'Resume') {
            console.log("Resume button is present")
            this.statement_agreed_with_attempt.click();
            browser.sleep(2000);
            const isPresent4 = await this.question_2.isPresent();

            if(isPresent4) {
                support.waitForParticularElement(2000, this.question_2);
                this.question_2.click();
                    
                support.waitForParticularElement(2000, this.que_2_submit);
                this.que_2_submit.click();
                    
                support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                this.que_2_next_questionBtn.click();

                support.waitForParticularElement(2000, this.question_2);
                const present = await this.question_2.isPresent();

                if(present) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
                        
                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();
                      
                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");
                }
            }
        }
        else {
            console.log("Retake present");
            this.statement_agreed_with_attempt.click();
            const ispresent = await this.retake_popup_msg.isPresent();
            if(ispresent) {
                //Checking popup is present or not
                support.waitForParticularElement(2000, this.retake_popup_msg);
                const is_retake_popup = await this.retake_popup_msg.getText();
                expect(is_retake_popup).equal("Are you sure you want to retake the set? You will lose the previous record for the set.");

                // Checking yes button is present on popup
                support.waitForParticularElement(2000, this.yes_btn);
                const is_yes_btn = await this.yes_btn.getText();
                expect(is_yes_btn).equal("Yes");
                this.yes_btn.click();
                console.log("Popup message is ::", is_retake_popup);
                
                const ischeckbox = this.question_2.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);

                if(ischeckbox) {
                    support.waitForParticularElement(2000, this.question_2);
                    this.question_2.click();
                        
                    support.waitForParticularElement(2000, this.que_2_submit);
                    this.que_2_submit.click();
                        
                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000, this.question_2);
                    const present = await this.question_2.isPresent();

                    if(present) {
                        support.waitForParticularElement(2000, this.question_2);
                        this.question_2.click();
                            
                        support.waitForParticularElement(2000, this.que_2_submit);
                        const submit = await this.que_2_submit.getText();
                        expect(submit).equal("Submit");
                        this.que_2_submit.click();
                        
                        support.waitForParticularElement(2000,this.your_ans);
                        const yourans = await this.your_ans.getText();
                        expect(yourans).equal("Your answer");

                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        const gotoBtn = await this.que_2_next_questionBtn.getText();
                        expect(gotoBtn).equal("Go to review");
                        this.que_2_next_questionBtn.click();

                        support.waitForParticularElement(2000,this.session_score);
                        const session = await this.session_score.getText();
                        expect(session).equal("Session Score");

                        support.waitForParticularElement(2000,this.backoption_score);
                        this.backoption_score.click();

                        support.waitForParticularElement(2000, this.title);
                        const text = await this.title.getText();
                        expect(text).equal("Single Highlighted Portion - Meaning Questions");
                    }
                }
            }
        }
        return console.log("Button is ::" + attemptBtn);
    }

    async functionQuestion() {
        support.waitForParticularElement(2000, this.single_highlighted_portion_function_questions_attempt);
        const button_text = await this.single_highlighted_portion_function_questions_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.single_highlighted_portion_function_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            } 
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.single_highlighted_portion_function_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.single_highlighted_portion_function_questions_attempt.click();
            const ispresent = await this.retake_popup_msg.isPresent();
            if(ispresent) {
                //Checking popup is present or not
                support.waitForParticularElement(2000, this.retake_popup_msg);
                const is_retake_popup = await this.retake_popup_msg.getText();
                expect(is_retake_popup).equal("Are you sure you want to retake the set? You will lose the previous record for the set.");

                // Checking yes button is present on popup
                support.waitForParticularElement(2000, this.yes_btn);
                const is_yes_btn = await this.yes_btn.getText();
                expect(is_yes_btn).equal("Yes");
                this.yes_btn.click();
                console.log("Popup message is ::", is_retake_popup);
                
                const ischeckbox = this.question_2.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        support.waitForParticularElement(2000, this.question_2)
                        this.question_2.click();

                        support.waitForParticularElement(2000, this.que_2_submit);
                        const submit = await this.que_2_submit.getText();
                        expect(submit).equal("Submit");
                        this.que_2_submit.click();

                        support.waitForParticularElement(2000,this.your_ans);
                        const yourans = await this.your_ans.getText();
                        expect(yourans).equal("Your answer");

                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        const gotoBtn = await this.que_2_next_questionBtn.getText();
                        expect(gotoBtn).equal("Go to review");
                        this.que_2_next_questionBtn.click();

                        support.waitForParticularElement(2000,this.session_score);
                        const session = await this.session_score.getText();
                        expect(session).equal("Session Score");

                        support.waitForParticularElement(2000,this.backoption_score);
                        this.backoption_score.click();

                        support.waitForParticularElement(2000, this.title);
                        const text = await this.title.getText();
                        expect(text).equal("Single Highlighted Portion - Meaning Questions");

                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: question greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    async meaningQuestion() {
        support.waitForParticularElement(2000, this.single_highlighted_portion_meaning_questions_attempt);
        const button_text = await this.single_highlighted_portion_meaning_questions_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.single_highlighted_portion_meaning_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            } 
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.single_highlighted_portion_meaning_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.single_highlighted_portion_meaning_questions_attempt.click();
            const ispresent = await this.retake_popup_msg.isPresent();
            if(ispresent) {
                //Checking popup is present or not
                support.waitForParticularElement(2000, this.retake_popup_msg);
                const is_retake_popup = await this.retake_popup_msg.getText();
                expect(is_retake_popup).equal("Are you sure you want to retake the set? You will lose the previous record for the set.");

                // Checking yes button is present on popup
                support.waitForParticularElement(2000, this.yes_btn);
                const is_yes_btn = await this.yes_btn.getText();
                expect(is_yes_btn).equal("Yes");
                this.yes_btn.click();
                console.log("Popup message is ::", is_retake_popup);
                
                const ischeckbox = this.question_2.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        support.waitForParticularElement(2000, this.question_2)
                        this.question_2.click();

                        support.waitForParticularElement(2000, this.que_2_submit);
                        const submit = await this.que_2_submit.getText();
                        expect(submit).equal("Submit");
                        this.que_2_submit.click();

                        support.waitForParticularElement(2000,this.your_ans);
                        const yourans = await this.your_ans.getText();
                        expect(yourans).equal("Your answer");

                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        const gotoBtn = await this.que_2_next_questionBtn.getText();
                        expect(gotoBtn).equal("Go to review");
                        this.que_2_next_questionBtn.click();

                        support.waitForParticularElement(2000,this.session_score);
                        const session = await this.session_score.getText();
                        expect(session).equal("Session Score");

                        support.waitForParticularElement(2000,this.backoption_score);
                        this.backoption_score.click();

                        support.waitForParticularElement(2000, this.title);
                        const text = await this.title.getText();
                        expect(text).equal("Single Highlighted Portion - Meaning Questions");

                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: question greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    async selectsectionQuestion() {
        support.waitForParticularElement(2000, this.single_highlighted_portion_meaning_questions_attempt);
        const button_text = await this.select_the_sentence_questions_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.select_the_sentence_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            } 
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.select_the_sentence_questions_attempt.click();
            const ischeckbox = this.question_2.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    support.waitForParticularElement(2000, this.question_2)
                    this.question_2.click();

                    support.waitForParticularElement(2000, this.que_2_submit);
                    const submit = await this.que_2_submit.getText();
                    expect(submit).equal("Submit");
                    this.que_2_submit.click();

                    support.waitForParticularElement(2000,this.your_ans);
                    const yourans = await this.your_ans.getText();
                    expect(yourans).equal("Your answer");

                    support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                    const gotoBtn = await this.que_2_next_questionBtn.getText();
                    expect(gotoBtn).equal("Go to review");
                    this.que_2_next_questionBtn.click();

                    support.waitForParticularElement(2000,this.session_score);
                    const session = await this.session_score.getText();
                    expect(session).equal("Session Score");

                    support.waitForParticularElement(2000,this.backoption_score);
                    this.backoption_score.click();

                    support.waitForParticularElement(2000, this.title);
                    const text = await this.title.getText();
                    expect(text).equal("Single Highlighted Portion - Meaning Questions");

                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: question greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.select_the_sentence_questions_attempt.click();
            const ispresent = await this.retake_popup_msg.isPresent();
            if(ispresent) {
                //Checking popup is present or not
                support.waitForParticularElement(2000, this.retake_popup_msg);
                const is_retake_popup = await this.retake_popup_msg.getText();
                expect(is_retake_popup).equal("Are you sure you want to retake the set? You will lose the previous record for the set.");

                // Checking yes button is present on popup
                support.waitForParticularElement(2000, this.yes_btn);
                const is_yes_btn = await this.yes_btn.getText();
                expect(is_yes_btn).equal("Yes");
                this.yes_btn.click();
                console.log("Popup message is ::", is_retake_popup);
                
                const ischeckbox = this.question_2.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        support.waitForParticularElement(2000, this.question_2)
                        this.question_2.click();

                        support.waitForParticularElement(2000, this.que_2_submit);
                        const submit = await this.que_2_submit.getText();
                        expect(submit).equal("Submit");
                        this.que_2_submit.click();

                        support.waitForParticularElement(2000,this.your_ans);
                        const yourans = await this.your_ans.getText();
                        expect(yourans).equal("Your answer");

                        support.waitForParticularElement(2000, this.que_2_next_questionBtn);
                        const gotoBtn = await this.que_2_next_questionBtn.getText();
                        expect(gotoBtn).equal("Go to review");
                        this.que_2_next_questionBtn.click();

                        support.waitForParticularElement(2000,this.session_score);
                        const session = await this.session_score.getText();
                        expect(session).equal("Session Score");

                        support.waitForParticularElement(2000,this.backoption_score);
                        this.backoption_score.click();

                        support.waitForParticularElement(2000, this.title);
                        const text = await this.title.getText();
                        expect(text).equal("Single Highlighted Portion - Meaning Questions");

                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: question greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    async standardSpecificQuestionExit() {

        //Navigate to login page
        browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

        //Enter username
        support.waitForParticularElement(2000,this.mobile_number);
        this.mobile_number.sendKeys("7558248794");

        //Enter password
        support.waitForParticularElement(1000,this.password);
        this.password.sendKeys("password");

        //Click on login button
        support.waitForParticularElement(1000,this.loginBtn);
        this.loginBtn.click();

        // //Varify dashboard text is present or not on Dashboard
        // support.waitForParticularElement(3000,this.dashboard);
        // const dashboard_text = await this.dashboard.getText().then((text)=>{
        //     return text;
        // });
        // console.log(dashboard_text);
        // expect(dashboard_text).equal('Dashboard');  

        support.waitForParticularElement(3000,this.focussPractice);
        this.focussPractice.click();
    
        support.waitForParticularElement(3000,this.verbal);
        this.verbal.click();

        browser.sleep(2000);
        if (await this.resumeButton.isPresent()) {
            support.waitForParticularElement(5000, this.resumeButton);
            this.resumeButton.click();
        }

        if (await this.retakeButton.isPresent()) {
            support.waitForParticularElement(4000, this.retakeButton);
            this.retakeButton.click();

            support.waitForParticularElement(2000, this.yes_btn);
            this.yes_btn.click()
        }

         if (await this.attemptButton.isPresent()) {
            support.waitForParticularElement(2000, this.attemptButton);
            this.attemptButton.click();
        }

        support.waitForParticularElement(2000, this.checkboxvb);
        this.checkboxvb.click()

        support.waitForParticularElement(4000, this.exitButton);
        this.exitButton.click()

        support.waitForParticularElement(4000, this.exitSession);
        this.exitSession.click()

        support.waitForParticularElement(2000, this.logoutIcon);
        this.logoutIcon.click()

        support.waitForParticularElement(2000, this.logoutClick);
        return this.logoutClick.click()
    }


    async VerbalAndQuantativeSet() {

        //Navigate to login page
        browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

        //Enter username
        support.waitForParticularElement(2000,this.mobile_number);
        this.mobile_number.sendKeys("7558248794");

        //Enter password
        support.waitForParticularElement(1000,this.password);
        this.password.sendKeys("password");

        //Click on login button
        support.waitForParticularElement(1000,this.loginBtn);
        this.loginBtn.click();

        // //Varify dashboard text is present or not on Dashboard
        // support.waitForParticularElement(3000,this.dashboard);
        // const dashboard_text = await this.dashboard.getText().then((text)=>{
        //     return text;
        // });
        // console.log(dashboard_text);
        // expect(dashboard_text).equal('Dashboard');  

        support.waitForParticularElement(3000,this.focussPractice);
        this.focussPractice.click();
    
        support.waitForParticularElement(3000,this.filterIcon);
        this.filterIcon.click();

        support.waitForParticularElement(3000,this.selectVerbal);
        this.selectVerbal.click();
       
        support.waitForParticularElement(2000, this.dragforVerbal);
        var scrollelement_3 = this.dragforVerbal;
        browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
            console.log("...........scrolled Down....");
        });
        browser.sleep(3000);

        support.waitForParticularElement(3000,this.filterIcon);
        this.filterIcon.click();

        support.waitForParticularElement(3000,this.selectQuant);
        this.selectQuant.click();

        browser.sleep(3000);
        
        support.waitForParticularElement(2000, this.dragforQuant);
        var scrollelement_3 = this.dragforQuant;
        browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
            console.log("...........scrolled Down....");
        });
        browser.sleep(3000);

        support.waitForParticularElement(2000, this.logoutIcon);
        this.logoutIcon.click()

        support.waitForParticularElement(2000, this.logoutClick);
        return this.logoutClick.click()

    }

    async TextCompletionSingleBlank(){

         //Navigate to login page
         browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

         //Enter username
         support.waitForParticularElement(2000,this.mobile_number);
         this.mobile_number.sendKeys("7558248794");
 
         //Enter password
         support.waitForParticularElement(1000,this.password);
         this.password.sendKeys("password");
 
         //Click on login button
         support.waitForParticularElement(1000,this.loginBtn);
         this.loginBtn.click();
 
         support.waitForParticularElement(3000,this.focussPractice);
         this.focussPractice.click();

         support.waitForParticularElement(3000,this.focussPracticeLabel);
         const text1 = await this.focussPracticeLabel.getText().then((text)=>{
             return text;
         });
         console.log(text1,"Label is available");
         //expect(text1).equal('Dashboard'); 

         support.waitForParticularElement(3000,this.verbal);
         this.verbal.click();

         support.waitForParticularElement(3000,this.singleBlankAtt);
         this.singleBlankAtt.click();
        
         if (await this.focussPracticeYes.isPresent()) {
            support.waitForParticularElement(5000, this.focussPracticeYes);
            this.focussPracticeYes.click();
        }
            else{

         var i;
         for(i=0;i<=10;i++){
         browser.sleep(2000);
        if (await this.singleBlankAns1.isPresent()) {
            support.waitForParticularElement(5000, this.singleBlankAns1);
            this.singleBlankAns1.click();
        }

        else if (await this.singleBlankAns11.isPresent()) {
            support.waitForParticularElement(5000, this.singleBlankAns11);
            this.singleBlankAns11.click();
        }
         
        support.waitForParticularElement(3000,this.singleBlankSubmit);
         this.singleBlankSubmit.click();

         support.waitForParticularElement(3000,this.singleBlankCorrectAns);
         this.singleBlankCorrectAns.click();

         if (await this.singleBlankNextQue.isPresent()) {
            support.waitForParticularElement(5000, this.singleBlankNextQue);
            this.singleBlankNextQue.click();
        }

        else if (await this.singleBlankGoToReview.isPresent()) {
            support.waitForParticularElement(5000, this.singleBlankGoToReview);
            this.singleBlankGoToReview.click();

            break;
        }
    }
        
    }
    support.waitForParticularElement(3000,this.sessionScoreLabel);
    const text3 = await this.sessionScoreLabel.getText().then((text)=>{
        return text;
    });
    console.log(text3,"Label is available");
    //expect(text2).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.sessionDuration);
    const text4 = await this.sessionDuration.getText().then((text)=>{
        return text;
    });
    console.log("Session Duration :",text4);
    //expect(text2).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.correctAns);
    const text5 = await this.correctAns.getText().then((text)=>{
        return text;
    });
    console.log("Correct Answer :",text5);
    //expect(text2).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.incorrectAns);
    const text6 = await this.incorrectAns.getText().then((text)=>{
        return text;
    });
    console.log("Incorrect Answer :",text6);
    //expect(text2).equal('Dashboard'); 

    support.waitForParticularElement(2000, this.dragforSingleBlank);
        var scrollelement_3 = this.dragforSingleBlank;
        browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
            console.log("...........scrolled Down....");
        });
     
        browser.sleep(3000);

        support.waitForParticularElement(3000,this.backClick);
         this.backClick.click();

    support.waitForParticularElement(3000,this.readingCompreLabel);
    const text7 = await this.readingCompreLabel.getText().then((text)=>{
        return text;
    });
    console.log(text7,"Label is available");
    //expect(text2).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.backClick);
         this.backClick.click();

         support.waitForParticularElement(2000, this.logoutIcon);
        this.logoutIcon.click()

        support.waitForParticularElement(2000, this.logoutClick);
        return this.logoutClick.click()
    }

    async primaryPurposeQuestion(){

        //Navigate to login page
        browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

        //Enter username
        support.waitForParticularElement(2000,this.mobile_number);
        this.mobile_number.sendKeys("7558248794");

        //Enter password
        support.waitForParticularElement(1000,this.password);
        this.password.sendKeys("password");

        //Click on login button
        support.waitForParticularElement(1000,this.loginBtn);
        this.loginBtn.click();

        support.waitForParticularElement(3000,this.focussPractice);
        this.focussPractice.click();

        support.waitForParticularElement(3000,this.focussPracticeLabel);
        const text1 = await this.focussPracticeLabel.getText().then((text)=>{
            return text;
        });
        console.log(text1,"Label is available");
        //expect(text1).equal('Dashboard'); 

        support.waitForParticularElement(3000,this.verbal);
        this.verbal.click();

        support.waitForParticularElement(3000,this.primaryPurposeQueAtt);
        this.primaryPurposeQueAtt.click();
       
        if (await this.focussPracticeYes.isPresent()) {
           support.waitForParticularElement(5000, this.focussPracticeYes);
           this.focussPracticeYes.click();
       }
           else{

        var i;
        for(i=0;i<=5;i++){
        browser.sleep(2000);
       if (await this.primaryPurposeQueAns.isPresent()) {
           support.waitForParticularElement(5000, this.primaryPurposeQueAns);
           this.primaryPurposeQueAns.click();
       }
       else{
        support.waitForParticularElement(5000, this.primaryPurposeQueAns1);
        this.primaryPurposeQueAns1.click();

       }
       
       support.waitForParticularElement(5000,this.primaryPurposeSubmit);
        this.primaryPurposeSubmit.click();

        support.waitForParticularElement(5000,this.primaryPurposeCorrectAns);
        this.primaryPurposeCorrectAns.click();

        if (await this.primaryPurposeNextQue.isPresent()) {
           support.waitForParticularElement(5000, this.primaryPurposeNextQue);
           this.primaryPurposeNextQue.click();
       }

       else if (await this.primaryPurposeGoToReview.isPresent()) {
           support.waitForParticularElement(5000, this.primaryPurposeGoToReview);
           this.primaryPurposeGoToReview.click();
           break;
       }
   }
       
   }
   support.waitForParticularElement(3000,this.sessionScoreLabel);
   const text3 = await this.sessionScoreLabel.getText().then((text)=>{
       return text;
   });
   console.log(text3,"Label is available");
   //expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.sessionDuration);
   const text4 = await this.sessionDuration.getText().then((text)=>{
       return text;
   });
   console.log("Session Duration :",text4);
   //expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.correctAns);
   const text5 = await this.correctAns.getText().then((text)=>{
       return text;
   });
   console.log("Correct Answer :",text5);
   //expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.incorrectAns);
   const text6 = await this.incorrectAns.getText().then((text)=>{
       return text;
   });
   console.log("Incorrect Answer :",text6);
   
       support.waitForParticularElement(3000,this.backClick);
        this.backClick.click();

   support.waitForParticularElement(3000,this.readingCompreLabel);
   const text7 = await this.readingCompreLabel.getText().then((text)=>{
       return text;
   });
   console.log(text7,"Label is available");
   //expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
        this.backClick.click();

        support.waitForParticularElement(2000, this.logoutIcon);
       this.logoutIcon.click()

       support.waitForParticularElement(2000, this.logoutClick);
       return this.logoutClick.click()

   }

async sentenceEquivalance(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.sentenceEquivalanceAtt);
    this.sentenceEquivalanceAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=11;i++){
    browser.sleep(2000);
   if (await this.sentenceEquivalanceAns.isPresent()) {
       support.waitForParticularElement(5000, this.sentenceEquivalanceAns);
       this.sentenceEquivalanceAns.click();
   }
   else{
    support.waitForParticularElement(5000, this.sentenceEquivalanceAns1);
    this.sentenceEquivalanceAns1.click();
   }
   
   support.waitForParticularElement(5000,this.sentenceEquivalanceSubmit);
    this.sentenceEquivalanceSubmit.click();

    support.waitForParticularElement(5000,this.sentenceEquivalanceCorrectAns);
    this.sentenceEquivalanceCorrectAns.click();

    if (await this.sentenceEquivalanceNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.sentenceEquivalanceNextQue);
       this.sentenceEquivalanceNextQue.click();
   }

   else if (await this.sentenceEquivalanceGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.sentenceEquivalanceGoToReview);
       this.sentenceEquivalanceGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

if (await this.dragforSentenceEqui.isPresent()) {
   support.waitForParticularElement(2000, this.dragforSentenceEqui);
       var scrollelement_3 = this.dragforSentenceEqui;
       browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
           console.log("...........scrolled Down....");
       });

       browser.sleep(3000);
    }
    else{
        support.waitForParticularElement(2000, this.dragforSentenceEqui1);
       var scrollelement_3 = this.dragforSentenceEqui1;
       browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
           console.log("...........scrolled Down....");
       });
       browser.sleep(3000);
    }
   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()
}


async strengthenWeakenArgumentQue(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.StrengthenWeakenArgQueAtt);
    this.StrengthenWeakenArgQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=10;i++){
    browser.sleep(2000);
   if (await this.StrengthenWeakenArgQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.StrengthenWeakenArgQueAns);
       this.StrengthenWeakenArgQueAns.click();
  }
  else if (await this.StrengthenWeakenArgQueAns2.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgQueAns2);
    this.StrengthenWeakenArgQueAns2.click();
}
else if (await this.StrengthenWeakenArgQueAns3.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgQueAns3);
    this.StrengthenWeakenArgQueAns3.click();
}
   else{
    support.waitForParticularElement(5000, this.StrengthenWeakenArgQueAns1);
    this.StrengthenWeakenArgQueAns1.click();
   }
   
   if (await this.StrengthenWeakenArgSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit);
    this.StrengthenWeakenArgSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.StrengthenWeakenArgCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns);
        this.StrengthenWeakenArgCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.StrengthenWeakenArgNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue);
       this.StrengthenWeakenArgNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.StrengthenWeakenArgGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.StrengthenWeakenArgGoToReview);
       this.StrengthenWeakenArgGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()
}

async doubleHighlightedPortion(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.doubleHightlightedPortionAtt);
    this.doubleHightlightedPortionAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=4;i++){
    browser.sleep(2000);
   if (await this.doubleHightlightedPortionAns.isPresent()) {
       support.waitForParticularElement(5000, this.doubleHightlightedPortionAns);
       this.doubleHightlightedPortionAns.click();
  }
  else if (await this.doubleHightlightedPortionAns1.isPresent()) {
    support.waitForParticularElement(5000, this.doubleHightlightedPortionAns1);
    this.doubleHightlightedPortionAns1.click();
}
    support.waitForParticularElement(5000, this.doubleHightlightedPortionSubmit);
    this.doubleHightlightedPortionSubmit.click();
        support.waitForParticularElement(5000, this.doubleHightlightedPortionCorrectAns);
        this.doubleHightlightedPortionCorrectAns.click();
   
    if (await this.doubleHightlightedPortionNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.doubleHightlightedPortionNextQue);
       this.doubleHightlightedPortionNextQue.click();
   }

   else if (await this.doubleHightlightedPortionGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.doubleHightlightedPortionGoToReview);
       this.doubleHightlightedPortionGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()

}


async exceptQuestion(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.exceptQueAtt);
    this.exceptQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=9;i++){
    browser.sleep(2000);
   if (await this.exceptQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueAns);
       this.exceptQueAns.click();
  }
  else if (await this.exceptQueAns1.isPresent()) {
    support.waitForParticularElement(5000, this.exceptQueAns1);
    this.exceptQueAns1.click();
}
    support.waitForParticularElement(5000, this.exceptQueSubmit);
    this.exceptQueSubmit.click();
        support.waitForParticularElement(5000, this.exceptQueCorrectAns);
        this.exceptQueCorrectAns.click();

    if (await this.exceptQueNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueNextQue);
       this.exceptQueNextQue.click();
   }

   else if (await this.exceptQueGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueGoToReview);
       this.exceptQueGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()

}



async AnsQueTypeSpecificDetailQueTag(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.AnsQueTypeSpecificDetailQueTagAtt);
    this.AnsQueTypeSpecificDetailQueTagAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=10;i++){
    browser.sleep(2000);
   if (await this.AnsQueTypeSpecificDetailQueTagAns.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns);
       this.AnsQueTypeSpecificDetailQueTagAns.click();
  }
  else if (await this.AnsQueTypeSpecificDetailQueTagAns1.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns1);
    this.AnsQueTypeSpecificDetailQueTagAns1.click();
}
else if (await this.AnsQueTypeSpecificDetailQueTagAns2.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns2);
    this.AnsQueTypeSpecificDetailQueTagAns2.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns3.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns3);
    this.AnsQueTypeSpecificDetailQueTagAns3.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns4.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns4);
    this.AnsQueTypeSpecificDetailQueTagAns4.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns5.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns5);
    this.AnsQueTypeSpecificDetailQueTagAns5.click();
}
   
   if (await this.AnsQueTypeSpecificDetailQueTagSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagSubmit);
    this.AnsQueTypeSpecificDetailQueTagSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.AnsQueTypeSpecificDetailQueTagCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagCorrectAns);
        this.AnsQueTypeSpecificDetailQueTagCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.AnsQueTypeSpecificDetailQueTagNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagNextQue);
       this.AnsQueTypeSpecificDetailQueTagNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.AnsQueTypeSpecificDetailQueTagGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagGoToReview);
       this.AnsQueTypeSpecificDetailQueTagGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()
}



async statAgreedTypeSpecificDetailQue(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.statAgreedTypeSpecificDetailQueAtt);
    this.statAgreedTypeSpecificDetailQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=11;i++){
    browser.sleep(2000);
   if (await this.statAgreedTypeSpecificDetailQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns);
       this.statAgreedTypeSpecificDetailQueAns.click();
  }
  else if (await this.statAgreedTypeSpecificDetailQueAns1.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns1);
    this.statAgreedTypeSpecificDetailQueAns1.click();
}
else if (await this.statAgreedTypeSpecificDetailQueAns2.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns2);
    this.statAgreedTypeSpecificDetailQueAns2.click();
}

else if (await this.statAgreedTypeSpecificDetailQueAns3.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns3);
    this.statAgreedTypeSpecificDetailQueAns3.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns4.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns4);
    this.AnsQueTypeSpecificDetailQueTagAns4.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns5.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns5);
    this.AnsQueTypeSpecificDetailQueTagAns5.click();
}
   if (await this.AnsQueTypeSpecificDetailQueTagSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagSubmit);
    this.AnsQueTypeSpecificDetailQueTagSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.AnsQueTypeSpecificDetailQueTagCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagCorrectAns);
        this.AnsQueTypeSpecificDetailQueTagCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.AnsQueTypeSpecificDetailQueTagNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagNextQue);
       this.AnsQueTypeSpecificDetailQueTagNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.AnsQueTypeSpecificDetailQueTagGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagGoToReview);
       this.AnsQueTypeSpecificDetailQueTagGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()
}


async singleHighPortionMeanQue(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.singleHighPortionMeanQueAtt);
    this.singleHighPortionMeanQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=5;i++){
    browser.sleep(2000);
   if (await this.statAgreedTypeSpecificDetailQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns);
       this.statAgreedTypeSpecificDetailQueAns.click();
  }
  else if (await this.statAgreedTypeSpecificDetailQueAns1.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns1);
    this.statAgreedTypeSpecificDetailQueAns1.click();
}
else if (await this.statAgreedTypeSpecificDetailQueAns2.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns2);
    this.statAgreedTypeSpecificDetailQueAns2.click();
}

else if (await this.statAgreedTypeSpecificDetailQueAns3.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns3);
    this.statAgreedTypeSpecificDetailQueAns3.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns4.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns4);
    this.AnsQueTypeSpecificDetailQueTagAns4.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns5.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns5);
    this.AnsQueTypeSpecificDetailQueTagAns5.click();
}
   
   if (await this.AnsQueTypeSpecificDetailQueTagSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagSubmit);
    this.AnsQueTypeSpecificDetailQueTagSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.AnsQueTypeSpecificDetailQueTagCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagCorrectAns);
        this.AnsQueTypeSpecificDetailQueTagCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.AnsQueTypeSpecificDetailQueTagNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagNextQue);
       this.AnsQueTypeSpecificDetailQueTagNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.AnsQueTypeSpecificDetailQueTagGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagGoToReview);
       this.AnsQueTypeSpecificDetailQueTagGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()

}


async singleHighPortionFunQue(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.singleHighPortionFunQueAtt);
    this.singleHighPortionFunQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=5;i++){
    browser.sleep(2000);
   if (await this.statAgreedTypeSpecificDetailQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns);
       this.statAgreedTypeSpecificDetailQueAns.click();
  }
  else if (await this.statAgreedTypeSpecificDetailQueAns1.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns1);
    this.statAgreedTypeSpecificDetailQueAns1.click();
}
else if (await this.statAgreedTypeSpecificDetailQueAns2.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns2);
    this.statAgreedTypeSpecificDetailQueAns2.click();
}

else if (await this.statAgreedTypeSpecificDetailQueAns3.isPresent()) {
    support.waitForParticularElement(5000, this.statAgreedTypeSpecificDetailQueAns3);
    this.statAgreedTypeSpecificDetailQueAns3.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns4.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns4);
    this.AnsQueTypeSpecificDetailQueTagAns4.click();
}

else if (await this.AnsQueTypeSpecificDetailQueTagAns5.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagAns5);
    this.AnsQueTypeSpecificDetailQueTagAns5.click();
}
   
   if (await this.AnsQueTypeSpecificDetailQueTagSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagSubmit);
    this.AnsQueTypeSpecificDetailQueTagSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.AnsQueTypeSpecificDetailQueTagCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagCorrectAns);
        this.AnsQueTypeSpecificDetailQueTagCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.AnsQueTypeSpecificDetailQueTagNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagNextQue);
       this.AnsQueTypeSpecificDetailQueTagNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.AnsQueTypeSpecificDetailQueTagGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagGoToReview);
       this.AnsQueTypeSpecificDetailQueTagGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()

}



async selectTheSentenceQue(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.selectTheSentenceQueAtt);
    this.selectTheSentenceQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    for(i=0;i<=4;i++){
    browser.sleep(2000);
 if (await this.selectTheSentenceQueAns2.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns2);
    this.selectTheSentenceQueAns2.click();
}

else if (await this.selectTheSentenceQueAns3.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns3);
    this.selectTheSentenceQueAns3.click();
}

else if (await this.selectTheSentenceQueAns4.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns4);
    this.selectTheSentenceQueAns4.click();
}

else if (await this.selectTheSentenceQueAns6.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns6);
    this.selectTheSentenceQueAns6.click();
}

else if (await this.selectTheSentenceQueAns7.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns7);
    this.selectTheSentenceQueAns7.click();
}

else if (await this.selectTheSentenceQueAns8.isPresent()) {
    support.waitForParticularElement(5000, this.selectTheSentenceQueAns8);
    this.selectTheSentenceQueAns8.click();
}
   if (await this.AnsQueTypeSpecificDetailQueTagSubmit.isPresent()) {
    support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagSubmit);
    this.AnsQueTypeSpecificDetailQueTagSubmit.click();
}

else if (await this.StrengthenWeakenArgSubmit1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgSubmit1);
    this.StrengthenWeakenArgSubmit1.click();
}

    if (await this.AnsQueTypeSpecificDetailQueTagCorrectAns.isPresent()) {
        support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagCorrectAns);
        this.AnsQueTypeSpecificDetailQueTagCorrectAns.click();
    }
 
    else if (await this.StrengthenWeakenArgCorrectAns1.isPresent()) {
        support.waitForParticularElement(5000, this.StrengthenWeakenArgCorrectAns1);
        this.StrengthenWeakenArgCorrectAns1.click();
    }

    support.waitForParticularElement(5000,this.StrengthenWeakenArgCorrectAns);
    this.StrengthenWeakenArgCorrectAns.click();

    if (await this.AnsQueTypeSpecificDetailQueTagNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagNextQue);
       this.AnsQueTypeSpecificDetailQueTagNextQue.click();
   }

   else if (await this.StrengthenWeakenArgNextQue1.isPresent()) {
    support.waitForParticularElement(5000, this.StrengthenWeakenArgNextQue1);
    this.StrengthenWeakenArgNextQue1.click();
}

   else if (await this.AnsQueTypeSpecificDetailQueTagGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.AnsQueTypeSpecificDetailQueTagGoToReview);
       this.AnsQueTypeSpecificDetailQueTagGoToReview.click();
       break;
   }
}
   
}
support.waitForParticularElement(3000,this.sessionScoreLabel);
const text3 = await this.sessionScoreLabel.getText().then((text)=>{
   return text;
});
console.log(text3,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.sessionDuration);
const text4 = await this.sessionDuration.getText().then((text)=>{
   return text;
});
console.log("Session Duration :",text4);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.correctAns);
const text5 = await this.correctAns.getText().then((text)=>{
   return text;
});
console.log("Correct Answer :",text5);
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.incorrectAns);
const text6 = await this.incorrectAns.getText().then((text)=>{
   return text;
});
console.log("Incorrect Answer :",text6);
//expect(text2).equal('Dashboard'); 

   support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

support.waitForParticularElement(3000,this.readingCompreLabel);
const text7 = await this.readingCompreLabel.getText().then((text)=>{
   return text;
});
console.log(text7,"Label is available");
//expect(text2).equal('Dashboard'); 

support.waitForParticularElement(3000,this.backClick);
    this.backClick.click();

    support.waitForParticularElement(2000, this.logoutIcon);
   this.logoutIcon.click()

   support.waitForParticularElement(2000, this.logoutClick);
   return this.logoutClick.click()

}


async verbalPageValidation(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7558248794");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.usernamelabel);
    const text1 = await this.usernamelabel.getText().then((text)=>{
        return text;
    });
    console.log("User Name ::",text1);

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text2 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text2,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.verbalReasoningLabel);
    const text3 = await this.verbalReasoningLabel.getText().then((text)=>{
        return text;
    });
    console.log(text3,"Label is available");

    support.waitForParticularElement(3000,this.readingCompreLabel);
    const text4 = await this.readingCompreLabel.getText().then((text)=>{
        return text;
    });
    console.log(text4,"Label is available");

    var i=0;
    if (await this.ssdqCard.isPresent()) {
        i++;
        support.waitForParticularElement(1000, this.ssdqCard);
        const text5 = await this.ssdqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.aqtsdqCard.isPresent()) {
        i++;
        const text5 = await this.aqtsdqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.sawtsdqCard.isPresent()) {
        i++;
        const text5 = await this.sawtsdqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.eqCard.isPresent()) {
        i++;
        const text5 = await this.eqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.ttfqCard.isPresent()) {
        i++;
        const text5 = await this.ttfqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.shpmqCard.isPresent()) {
        i++;
        const text5 = await this.shpmqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.shpfqcard.isPresent()) {
        i++;
        const text5 = await this.shpfqcard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.dhpfqCard.isPresent()) {
        i++;
        const text5 = await this.dhpfqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");


    if (await this.stsqcard.isPresent()) {
        i++;
        const text5 = await this.stsqcard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.swtaqcard.isPresent()) {
        i++;
        const text5 = await this.swtaqcard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.ftcqCard.isPresent()) {
        i++;
        const text5 = await this.ftcqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.rtdqCard.isPresent()) {
        i++;
        const text5 = await this.rtdqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.srqCard.isPresent()) {
        i++;
        const text5 = await this.srqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.iqCard.isPresent()) {
        i++;
        const text5 = await this.iqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.ppqCard.isPresent()) {
        i++;
        const text5 = await this.ppqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.mpqCard.isPresent()) {
        i++;
        const text5 = await this.mpqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.btqCard.isPresent()) {
        i++;
        const text5 = await this.btqCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.seCard.isPresent()) {
        i++;
        const text5 = await this.seCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.sbCard.isPresent()) {
        i++;
        const text5 = await this.sbCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.dbcard.isPresent()) {
        i++;
        const text5 = await this.dbcard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    if (await this.tbCard.isPresent()) {
        i++;
        const text5 = await this.tbCard.getText().then((text)=>{
            return text;
        });
        console.log(text5,"Card is available");
    }
    else console.log(text5,"Card is not available");

    console.log("Total No of cards Present ::",i); 
    browser.sleep(2000); return;
}



async verbalExit(){

    //Navigate to login page
    browser.get("http://cbt.dilipoakacademy.com/dev/#/login");

    //Enter username
    support.waitForParticularElement(2000,this.mobile_number);
    this.mobile_number.sendKeys("7276165706");

    //Enter password
    support.waitForParticularElement(1000,this.password);
    this.password.sendKeys("password");

    //Click on login button
    support.waitForParticularElement(1000,this.loginBtn);
    this.loginBtn.click();

    support.waitForParticularElement(3000,this.focussPractice);
    this.focussPractice.click();

    support.waitForParticularElement(3000,this.focussPracticeLabel);
    const text1 = await this.focussPracticeLabel.getText().then((text)=>{
        return text;
    });
    console.log(text1,"Label is available");
    //expect(text1).equal('Dashboard'); 

    support.waitForParticularElement(2000, this.verbal);
        var scrollelement_3 = this.verbal;
        browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
            console.log("...........scrolled Down....");
        });
        browser.sleep(3000);

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    support.waitForParticularElement(3000,this.exceptQueAtt);
    this.exceptQueAtt.click();
   
    if (await this.focussPracticeYes.isPresent()) {
       support.waitForParticularElement(5000, this.focussPracticeYes);
       this.focussPracticeYes.click();
   }
       else{

    var i;
    browser.sleep(2000);
   if (await this.exceptQueAns.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueAns);
       this.exceptQueAns.click();
  }
  else if (await this.exceptQueAns1.isPresent()) {
    support.waitForParticularElement(5000, this.exceptQueAns1);
    this.exceptQueAns1.click();
}
 support.waitForParticularElement(5000, this.exceptQueSubmit);
    this.exceptQueSubmit.click();

    support.waitForParticularElement(5000, this.exceptQueCorrectAns);
        this.exceptQueCorrectAns.click();
   
    if (await this.exceptQueNextQue.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueNextQue);
       this.exceptQueNextQue.click();
   }
   else if (await this.exceptQueGoToReview.isPresent()) {
       support.waitForParticularElement(5000, this.exceptQueGoToReview);
       this.exceptQueGoToReview.click();
   }

   support.waitForParticularElement(5000, this.exitButton);
   this.exitButton.click();

   support.waitForParticularElement(5000, this.exitSession);
   this.exitSession.click();
}

// support.waitForParticularElement(2000, this.scrollToSeeVerbal);
        // var scrollelement_3 = this.scrollToSeeVerbal;
        // browser.executeScript("arguments[0].scrollIntoView();", scrollelement_3.getWebElement()).then(function () {
        //     console.log("...........scrolled Down....");
        // });
        // browser.sleep(3000);

    support.waitForParticularElement(3000,this.verbal);
    this.verbal.click();

    browser.sleep(3000)

    support.waitForParticularElement(2000, this.logoutIcon);
    this.logoutIcon.click()

    support.waitForParticularElement(2000, this.logoutClick);
    return this.logoutClick.click()
}
}
module.exports = VerbalPage;
        