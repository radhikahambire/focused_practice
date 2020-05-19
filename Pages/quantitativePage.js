const elementHelper = require("../Support/ElementHelperjs");
const support = new elementHelper();
const chai = require('chai');
let expect = chai.expect;

class quantitativePage {
    constructor(){
        this.quantitativeBtn = element(by.css('app-homework-student-dashboard > div > mat-card > div > app-iro-button:nth-child(1) > button'));
        
        // quantitative card's title css 
        this.coordinate_geometry = element(by.css('app-homework-question-set > div > div > div > div > mat-card:nth-child(1) > p'));
        this.data_interpretation = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(2) > p"));
        this.equation_and_inequalities = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(3) > p"));
        this.function = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(4) > p"));
        this.mixtures = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(5) > p"));
        this.number_system = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(6) > p"));
        this.percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(7) > p"))
        this.permutation_combination = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(8) > p"))
        this.plane_geometer = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(9) > p"));
        this.probability = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(10) > p"))
        this.quadratics = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(11) > p"))
        this.ratios = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(12) > p"))
        this.remainders_hcl_lcm = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(13) > p"))
        this.sequence_series = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(14) > p"));
        this.speed_distance_time = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(15) > p"))
        this.statistics = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(16) > p"));
        this.surface_area_volume = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(17) > p"))
        this.work_time = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(18) > p"));

        //attempt button css
        this.coordinate_geometry_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(1) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.data_interpretation_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(2) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.equation_and_inequalities_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(3) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.function_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(4) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.mixtures_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(5) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.number_system_attempt  = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(6) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.percent_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(7) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.permutation_combination_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(8) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"))
        this.plane_geometry_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(9) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"))
        this.probability_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(10) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"))
        this.quadratics_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(11) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"))
        this.ratios_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(12) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"))
        this.remainders_hcl_lcm_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(13) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.sequence_series_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(14) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.speed_distance_time_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(15) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.statistics_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(16) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.surface_area_volume_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(17) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));
        this.work_time_attempt = element(by.css("app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(18) > div:nth-child(3) > div:nth-child(1) > app-iro-button > button"));

        // Percentage value css
        this.coordinate_geometry_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(1)> div:nth-child(2) > div:nth-child(1) > p"));
        this.data_interpretation_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(2)> div:nth-child(2) > div:nth-child(1) > p"));
        this.equation_and_inequalities_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(3)> div:nth-child(2) > div:nth-child(1) > p"));
        this.function_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(2)> div:nth-child(2) > div:nth-child(1) > p"));
        this.mixtures_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(5)> div:nth-child(2) > div:nth-child(1) > p"));
        this.number_system_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(6)> div:nth-child(2) > div:nth-child(1) > p"));
        this.percent_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(7)> div:nth-child(2) > div:nth-child(1) > p"));
        this.permutation_combination_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(8)> div:nth-child(2) > div:nth-child(1) > p"));
        this.plane_geometry_percetanhe = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(9)> div:nth-child(2) > div:nth-child(1) > p"));
        this.probability_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(10)> div:nth-child(2) > div:nth-child(1) > p"));
        this.quadratics_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(11)> div:nth-child(2) > div:nth-child(1) > p"));
        this.ratios_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(12)> div:nth-child(2) > div:nth-child(1) > p"));
        this.remainders_hcl_lcm_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(13)> div:nth-child(2) > div:nth-child(1) > p"))
        this.sequence_series_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(14)> div:nth-child(2) > div:nth-child(1) > p"));
        this.speed_distance_time_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(15)> div:nth-child(2) > div:nth-child(1) > p"));
        this.statistics_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(16)> div:nth-child(2) > div:nth-child(1) > p"));
        this.surface_area_volume_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(15)> div:nth-child(2) > div:nth-child(1) > p"));
        this.work_time_percentage = element(by.css("app-homework-question-set > div > div > div > div > mat-card:nth-child(18)> div:nth-child(2) > div:nth-child(1) > p"));

        //no question popup css
        this.message_popup = element(by.css("app-error-popup-no-question > div > mat-card > div > div:nth-child(2) > div > p"));
        this.ok_btn = element(by.css("app-error-popup-no-question > div > mat-card > div > div:nth-child(3) > app-iro-button > button"));

        //Data interpretation
        this.checkbox = element(by.css("app-practice-question-container > div > div > div > div > div > mat-card:nth-child(2) > div > div:nth-child(2)  > div > div:nth-child(1) > div > div > div:nth-child(1)"));
        this.submit_btn = element(by.css("app-practice-question-container > div > div > div > div > div > mat-card:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(3) > app-iro-button > button"));
        this.your_ans = element(by.css("app-practice-question-container > div > div > div:nth-child(1) > div > div > mat-card:nth-child(2) > div > div:nth-child(3) > app-iro-button:nth-child(1) > button"));
        this.correct_ans = element(by.css("app-practice-question-container > div > div > div:nth-child(1) > div > div > mat-card:nth-child(2) > div > div:nth-child(3) > app-iro-button:nth-child(2) > button"));
        this.go_to_review = element(by.css("app-practice-question-container > div > div > div:nth-child(1) > div > div > mat-card:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(3) > app-iro-button > button"));
        this.your_score = element(by.css("app-practice-question-container > div > div > div:nth-child(2) > div > mat-card > div:nth-child(1) > p"));
        this.explanation = element(by.css("app-practice-question-container > div > div > div:nth-child(2) >  mat-card > div:nth-child(1) > div:nth-child(1) > p"));
        this.note = element(by.css("app-practice-question-container > div > div > div:nth-child(2) >div:nth-child(3)  >  mat-card > div:nth-child(1) > div:nth-child(1) > p"));
        this.question_num = element(by.css("app-test-header > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p"));
        
        // Review score page css
        this.backoption_score = element(by.xpath("//app-home/mat-drawer-container/mat-drawer-content/div/div/div/mat-toolbar/mat-toolbar-row/div[1]"));
        this.session_score = element(by.css("app-homework >app-homework-result-container > div > mat-card:nth-child(1) > div:nth-child(1) > p"));

        // Retake popup meassage
        this.retake_popup_msg = element(by.css("app-dont-show > div > mat-card  > div > div:nth-child(2) > div > p"));
        this.no_btn = element(by.css("app-dont-show > div > mat-card  > div > div:nth-child(3) > app-iro-button:nth-child(1) > button"));
        this.yes_btn = element(by.css("#mat-dialog-0 > app-dont-show > div > mat-card > div > div.section-warning-action > app-iro-button:nth-child(2)"));

        this.quantitativeBack = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted"));
        //mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div:nth-child(1)
                                            //body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted
        this.view_dashboard = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div:nth-child(3)>app-iro-button > button > span"))

        this.exitButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-test-header > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > p"))
        this.retakeButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(1) > div:nth-child(3) > div > app-iro-button > button > span"))
        this.attemptButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-homework-question-set > div > div > div > div:nth-child(1) > mat-card:nth-child(10) > div:nth-child(3) > div > app-iro-button > button > span"))
        this.resumeButton = element(by.xpath("//span[contains(text(),'Resume')]"))
        this.checkboxvb = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div:nth-child(2) > div.pointer.cbt-checkbox-unfill"))
        this.mobile_number = element(by.css("#mat-input-0"));
        this.password = element(by.css("#mat-input-1"));
        this.loginBtn = element(by.css("#loginWrapper > div > section:nth-child(2) > div.loginData > div > app-iro-button > button"));
        this.quantitativeButton = element(by.xpath("//span[contains(text(),'Quantitative')]"))
        this.exitSession = element(by.xpath("//span[contains(text(),'Exit Session')]"))
        
        this.focussPractice = element(by.xpath("//p[contains(text(),'Focused Practice')]"))
        this.logoutIcon = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-user-profile.pointer"))
        this.logoutClick = element(by.xpath("//button[contains(text(),'Logout')]"))


        this.surfaceAreaVolAtt = element(by.xpath("//*[@id='CbtTemplateWrapper']/app-homework/app-homework-test-container/div/app-homework-question-set/div/div/div/div[1]/mat-card[17]/div[2]/div/app-iro-button/button"))
        this.surfaceAreaVolAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div:nth-child(1) > div.pointer.cbt-checkbox-unfill"))
        this.surfaceAreaVolAns1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div:nth-child(1) > p"))
        this.surfaceAreaVolAns2 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div.pointer.cbt-checkbox-unfill"))
        this.surfaceAreaVolAns3 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > p"))
        this.surfaceAreaVolSubmit = element(by.xpath("//span[contains(text(),'Submit')]"))
        this.surfaceAreaVolCorrectAns = element(by.xpath("//span[contains(text(),'Correct answer')]"))
        this.surfaceAreaVolNextQue = element(by.xpath("//span[contains(text(),'Next Question')]"))
        this.surfaceAreaVolGoToReview = element(by.xpath("//span[contains(text(),'Go to review')]"))
        this.quantLabel = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > p.cbt-toolbar-title.ng-star-inserted"))
        this.sessionScoreLabel = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div.header-separator-bottom-light > p"))
        this.sessionDuration = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(1) > p.value"))
        this.correctAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(2) > p.value"))
        this.incorrectAns = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-result-container > div > mat-card.take-test.mat-card.ng-star-inserted > div:nth-child(2) > div:nth-child(3) > p.value"))
        this.focussPracticeYes = element(by.css("#mat-dialog-0 > app-dont-show > div > mat-card > div > div.section-warning-action > app-iro-button:nth-child(2) > button"))
        this.backClick = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted"))

        this.exitButton1 = element(by.xpath("//p[contains(text(),'Exit')]"))
        this.radioButton = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.option-body.ng-star-inserted > div > div > div > div > div:nth-child(2) > div > div.cbt-radio-unfill.pointer"))
        this.submit_btn1 = element(by.css("#CbtTemplateWrapper > app-homework > app-homework-test-container > div > app-practice-question-container > div > div > div > div > div > mat-card.option-container.mat-card > div > div.footer > div > div.ng-star-inserted > app-iro-button"))
    
    }
    async checkallElementsOfQuantPage() {
        // Click on quantitative button
        support.waitForParticularElement(2000, this.quantitativeBtn);
        this.quantitativeBtn.click();

        // Checking co-ordinate geometry card is present or not
        support.waitForParticularElement(2000, this.coordinate_geometry);
        const coordinate_geometry_text = await this.coordinate_geometry.getText().then((text)=>{
            return text;
        });
        expect(coordinate_geometry_text).equal("Co-ordinate Geometry");

        // Checking data interpretation card is present or not
        support.waitForParticularElement(2000,this.data_interpretation)
        const data_interpretation_text = await this.data_interpretation.getText().then((text)=>{
            return text;
        }) 
        expect(data_interpretation_text).equal("Data Interpretation");

        // Checking equations and inequalities card present or not
        support.waitForParticularElement(2000,this.equation_and_inequalities)
        const equation_and_inequalities_text = await this.equation_and_inequalities.getText().then((text)=>{
            return text;
        });
        expect(equation_and_inequalities_text).equal("Equations and Inequalities");

        // Checking functions card present or not
        support.waitForParticularElement(2000, this.function);
        const function_text = await this.function.getText().then((text)=>{
            return text;
        });
        expect(function_text).equal("Functions");

        // Checking mixtures card present or not
        support.waitForParticularElement(2000, this.mixtures);
        const mixtures_text = await this.mixtures.getText().then((text)=>{
            return text;    
        })
        expect(mixtures_text).equal("Mixtures");

        // Checking number system card present or not
        support.waitForParticularElement(2000,this.number_system);
        const number_system_text = await this.number_system.getText().then((text)=>{
            return text;
        });
        expect(number_system_text).equal("Number Systems");

        // Checking Percent card present or not
        support.waitForParticularElement(2000, this.percentage);
        const percentage_text = await this.percentage.getText().then((text)=>{
            return text;
        });
        expect(percentage_text).equal("Percent")

        // Checking Permutations and Combinations card present or not
        support.waitForParticularElement(2000, this.permutation_combination);
        const permutation_combination_text = await this.permutation_combination.getText().then((text)=>{
            return text;
        });
        expect(permutation_combination_text).equal("Permutations and Combinations");

        // Checking Plane Geometry card present or not
        support.waitForParticularElement(2000, this.plane_geometer);
        const plane_geometer_text = await this.plane_geometer.getText().then((text)=>{
            return text;
        });
        expect(plane_geometer_text).equal("Plane Geometry");

        // Checking Probability card present or not
        support.waitForParticularElement(2000, this.probability);
        const probability_text = await this.probability.getText().then((text)=>{
            return text;
        });
        expect(probability_text).equal("Probability");

        // Checking Quadratics card present or not
        support.waitForParticularElement(2000, this.quadratics);
        const quadratics_text = await this.quadratics.getText().then((text)=>{
            return text;
        })
        expect(quadratics_text).equal("Quadratics");

        // Checking Ratios card present or not
        support.waitForParticularElement(2000, this.ratios);
        const ratios_text = await this.ratios.getText().then((text)=>{
            return text;
        })
        expect(ratios_text).equal("Ratios");

        // Checking Remainders, HCF and LCM card present or not
        support.waitForParticularElement(2000, this.remainders_hcl_lcm);
        const remainders_hcl_lcm_text = await this.remainders_hcl_lcm.getText().then((text)=>{
            return text;
        });
        expect(remainders_hcl_lcm_text).equal("Remainders, HCF and LCM");

        // Checking Sequence and Series card present or not
        support.waitForParticularElement(2000, this.sequence_series);
        const sequence_series_text = await this.sequence_series.getText().then((text)=>{
            return text;
        });
        expect(sequence_series_text).equal("Sequence and Series");

        // Checking Speed, Distance and Time card present or not
        support.waitForParticularElement(2000, this.speed_distance_time);
        const speed_distance_time_text = await this.speed_distance_time.getText().then((text)=>{
            return text;
        });
        expect(speed_distance_time_text).equal("Speed, Distance and Time");

        // Checking Statistics card present or not
        support.waitForParticularElement(2000, this.statistics);
        const statistics_text = await this.statistics.getText().then((text)=>{
            return text;
        });
        expect(statistics_text).equal("Statistics");

        // Checking Surface Area and Volume card present or not
        support.waitForParticularElement(2000, this.surface_area_volume);
        const surface_area_volume_text = await this.surface_area_volume.getText().then((text)=>{
            return text;
        });
        expect(surface_area_volume_text).equal("Surface Area and Volume");

        // Checking Work and Time card present or not
        support.waitForParticularElement(2000, this.work_time);
        const work_time_text = await this.work_time.getText().then((text)=>{
            return text;
        });
        expect(work_time_text).equal("Work and Time");

        return console.log(coordinate_geometry_text);
    } 
    // method to check data interpretation page functionality   
    async dataInterpretation() {
        support.waitForParticularElement(2000, this.data_interpretation_attempt);
        const dataInterpretation_button = await this.data_interpretation_attempt.getText();
        if(dataInterpretation_button === 'Attempt') {
            console.log("Attempt button is present..!!");
            this.data_interpretation_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(dataInterpretation_button === 'Resume') {
            console.log("Resume button is present..!!");
            this.data_interpretation_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // // Checking navigated to quantitative page or not
                    // support.waitForParticularElement(2000, this.data_interpretation);
                    // const is_data_interpretation = await this.data_interpretation
                    // expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }     
        }
        else {
            console.log("Retake button is present")
            this.data_interpretation_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            }               
        }
        return console.log("Card button title is :: ", dataInterpretation_button);
    }

    async testEquationandInequalitiesPage() {
        support.waitForParticularElement(2000, this.equation_and_inequalities_attempt);
        const button_text = await this.equation_and_inequalities_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.equation_and_inequalities_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.equation_and_inequalities_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.equation_and_inequalities_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }
    // Method to check Function page functionality
    async testFunctionPage() {
        support.waitForParticularElement(2000, this.function_attempt);
        const button_text = await this.function_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.function_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.function_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.function_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }
    // Method to test Mixtures Page functionality
    async testMixturePage() {
        support.waitForParticularElement(2000, this.mixtures_attempt);
        const button_text = await this.mixtures_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.mixtures_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.mixtures_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.mixtures_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }
    // Method to test Permutation page functionality
    async testPermutationCombinationPage() {
        support.waitForParticularElement(2000, this.permutation_combination_attempt);
        const button_text = await this.permutation_combination_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.permutation_combination_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.permutation_combination_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.permutation_combination_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    // Method to test Plane geometry functionality
    async testPlaneGeometryPage() {
        support.waitForParticularElement(2000, this.plane_geometry_attempt);
        const button_text = await this.plane_geometry_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.plane_geometry_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.plane_geometry_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.plane_geometry_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

     // Method to test Probability functionality
     async testProbabilityPage() {
        support.waitForParticularElement(2000, this.probability_attempt);
        const button_text = await this.probability_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.probability_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.probability_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.probability_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(5000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    // Method to test Sequence and series functionality
    async testSequenceandseriesPage() {
        support.waitForParticularElement(5000, this.sequence_series_attempt);
        const button_text = await this.sequence_series_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.sequence_series_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.sequence_series_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.sequence_series_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    // Method to test Speed distance and time functionality
    async testSpeedDistanceTimePage() {
        support.waitForParticularElement(5000, this.speed_distance_time_attempt);
        const button_text = await this.speed_distance_time_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.speed_distance_time_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.speed_distance_time_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.speed_distance_time_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    // Method to test Surface area and volume functionality
    async testSurfaceareaandvolumeTimePage() {
        support.waitForParticularElement(2000, this.surface_area_volume_attempt);
        const button_text = await this.surface_area_volume_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.surface_area_volume_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.surface_area_volume_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.surface_area_volume_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    // Method to test WOrk and time functionality
    async testWorkAndTimePage() {
        support.waitForParticularElement(2000, this.work_time_attempt);
        const button_text = await this.work_time_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.work_time_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()
    
                            // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.data_interpretation);
                            const is_data_interpretation = await this.data_interpretation.getText()
                            expect(is_data_interpretation).equal("Data Interpretation")
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.work_time_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();

                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.data_interpretation);
                    const is_data_interpretation = await this.data_interpretation.getText()
                    expect(is_data_interpretation).equal("Data Interpretation")
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.work_time_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.data_interpretation);
                        const is_data_interpretation = await this.data_interpretation.getText();
                        expect(is_data_interpretation).equal("Data Interpretation")

                        support.waitForParticularElement(2000, this.quantitativeBack);
                        this.quantitativeBack.click();

                        support.waitForParticularElement(2000, this.quantitativeBtn);
                        const btn = await this.quantitativeBtn.getText();
                        expect(btn).equal("Quantitative")
                    }
                    else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text);
    }

    async clickBack() {
        support.waitForParticularElement(5000, this.quantitativeBack)
        this.quantitativeBack.click();
        support.waitForParticularElement(2000, this.view_dashboard);
        const button_text = await this.view_dashboard.getText();
    }

    async quantExit() {

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
    
        support.waitForParticularElement(3000,this.quantitativeButton);
        this.quantitativeButton.click();

        browser.sleep(3000)

        support.waitForParticularElement(2000, this.coordinate_geometry_attempt);
        this.coordinate_geometry_attempt.click()

        browser.sleep(2000);
        if (await this.resumeButton.isPresent()) {
            support.waitForParticularElement(5000, this.resumeButton);
            this.resumeButton.click();
        }

        if (await this.retakeButton.isPresent()) {
            support.waitForParticularElement(2000, this.retakeButton);
            this.retakeButton.click();

            support.waitForParticularElement(4000, this.yes_btn);
            this.yes_btn.click()
        }

         if (await this.attemptButton.isPresent()) {
            support.waitForParticularElement(2000, this.attemptButton);
            this.attemptButton.click();
        }

        if (await this.checkboxvb.isPresent()) {
            support.waitForParticularElement(2000, this.checkboxvb);
            this.checkboxvb.click();
        }
        else
        {
        support.waitForParticularElement(2000, this.radioButton);
        this.radioButton.click()
    }
        support.waitForParticularElement(2000, this.submit_btn1);
        this.submit_btn1.click()

        support.waitForParticularElement(2000, this.exitButton1);
        this.exitButton1.click()

        support.waitForParticularElement(2000, this.exitSession);
        this.exitSession.click()

        support.waitForParticularElement(3000,this.quantitativeButton);
        this.quantitativeButton.click();

        browser.sleep(3000)
        support.waitForParticularElement(2000, this.logoutIcon);
        this.logoutIcon.click()

        support.waitForParticularElement(2000, this.logoutClick);
        return this.logoutClick.click()
    }





    async coordinateGeometry(){

        support.waitForParticularElement(2000, this.coordinate_geometry_attempt);
        const button_text = await this.coordinate_geometry_attempt.getText();
        if(button_text === "Attempt") {
            console.log("Attempt present")
            this.coordinate_geometry_attempt.click();
            const ispresent = await this.message_popup.isPresent()
            console.log("Is present :: ", ispresent);
            if(ispresent) {
                support.waitForParticularElement(2000, this.ok_btn);
                this.ok_btn.click();
            }
            else {
                const ischeckbox = this.checkbox.isPresent();
                if(ischeckbox) {
                    console.log("Checkbox is present");
                    const ischeckbox = this.checkbox.isPresent();
                    support.waitForParticularElement(2000, this.question_num)
                    const question_text = await this.question_num.getText();
                    const number_of_que = parseInt( question_text.split("/")[1]);
                    console.log("Number of question is :: ", number_of_que);
                    // for question 1
                    if(number_of_que === 1) {
                        // Checking checkbox is present or not
                        if(ischeckbox) {
                            console.log("Checkbox is present");                
                            // Clicking checkbox
                            support.waitForParticularElement(2000, this.checkbox);
                            this.checkbox.click()

                            support.waitForParticularElement(2000, this.exitButton);
                        this.exitButton.click()
    
                   /*         // Click on submit button
                            support.waitForParticularElement(2000, this.submit_btn);
                            const text = await this.submit_btn.getText();
                            console.log("Text is :: ", text); 
                            this.submit_btn.click();       
                            
                            // check your answer button is present or not
                            support.waitForParticularElement(2000, this.your_ans);
                            const isyour_ans = await this.your_ans.getText();
                            expect(isyour_ans).equal("Your answer");
    
                            // Check correct ans button is present or not
                            support.waitForParticularElement(2000, this.correct_ans);
                            const is_correct_ans = await this.correct_ans.getText();
                            expect(is_correct_ans).equal("Correct answer");
    
                            // Checking Your score tab is present or not
                            support.waitForParticularElement(2000, this.your_score);
                            const is_your_score = await this.your_score.getText();
                            expect(is_your_score).equal("Your Score");
    
                            // Checking explaination tab is present 0r not
                            support.waitForParticularElement(2000, this.explanation);
                            const is_explaination = await this.explanation.getText();
                            expect(is_explaination).equal("Explanation");
    
                            // checking goto review button present or not
                            support.waitForParticularElement(2000, this.go_to_review);
                            const is_go_to_review = await this.go_to_review.getText();
                            expect(is_go_to_review).equal("Go to review");
                            this.go_to_review.click();
    
                            // Checking session score is present or not
                            support.waitForParticularElement(2000, this.session_score);
                            const is_session_score = await this.session_score.getText();
                            expect(is_session_score).equal("Session Score")
    
                            // Clicking on Back option
                            support.waitForParticularElement(2000, this.backoption_score);
                            this.backoption_score.click();
    
                            // Checking navigated to quantitative page or not
                            support.waitForParticularElement(2000, this.coordinate_geometry);
                            const is_data_interpretation = await this.coordinate_geometry.getText()
                            expect(is_data_interpretation).equal("Co-ordinate Geometry")    */
                        }
                        else {
                            console.log("Other option is present...!!!")
                        }
                    }
                    else {
                        console.log("Todo :: questiuon greater than 1 is in progress..")
                    } 
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
        }
        else if(button_text === "Resume") {
            console.log("Resume present");
            this.work_time_attempt.click();
            const ischeckbox = this.checkbox.isPresent();
            support.waitForParticularElement(2000, this.question_num)
            const question_text = await this.question_num.getText();
            const number_of_que = parseInt( question_text.split("/")[1]);
            console.log("Number of question is :: ", number_of_que);
            // for question 1
            if(number_of_que === 1) {
                // Checking checkbox is present or not
                if(ischeckbox) {
                    console.log("Checkbox is present");                
                    // Clicking checkbox
                    support.waitForParticularElement(2000, this.checkbox);
                    this.checkbox.click()

                    support.waitForParticularElement(2000, this.exitButton);
                        this.exitButton.click()

          /*          // Click on submit button
                    support.waitForParticularElement(2000, this.submit_btn);
                    const text = await this.submit_btn.getText();
                    console.log("Text is :: ", text); 
                    this.submit_btn.click();       
                    
                    // check your answer button is present or not
                    support.waitForParticularElement(2000, this.your_ans);
                    const isyour_ans = await this.your_ans.getText();
                    expect(isyour_ans).equal("Your answer");

                    // Check correct ans button is present or not
                    support.waitForParticularElement(2000, this.correct_ans);
                    const is_correct_ans = await this.correct_ans.getText();
                    expect(is_correct_ans).equal("Correct answer");

                    // Checking Your score tab is present or not
                    support.waitForParticularElement(2000, this.your_score);
                    const is_your_score = await this.your_score.getText();
                    expect(is_your_score).equal("Your Score");

                    // Checking explaination tab is present 0r not
                    support.waitForParticularElement(2000, this.explanation);
                    const is_explaination = await this.explanation.getText();
                    expect(is_explaination).equal("Explanation");

                    // checking goto review button present or not
                    support.waitForParticularElement(2000, this.go_to_review);
                    const is_go_to_review = await this.go_to_review.getText();
                    expect(is_go_to_review).equal("Go to review");
                    this.go_to_review.click();

                    // Checking session score is present or not
                    support.waitForParticularElement(2000, this.session_score);
                    const is_session_score = await this.session_score.getText();
                    expect(is_session_score).equal("Session Score")

                    // Clicking on Back option
                    support.waitForParticularElement(2000, this.backoption_score);
                    this.backoption_score.click();
                    
                    // Checking navigated to quantitative page or not
                    support.waitForParticularElement(2000, this.coordinate_geometry);
                    const is_data_interpretation = await this.coordinate_geometry.getText()
                    expect(is_data_interpretation).equal("Co-ordinate Geometry")    */
                }
                else {
                    console.log("Other option is present...!!!")
                }
            }
            else {
                console.log("Todo :: questiuon greater than 1 is in progress..")
            }    
        }
        else {
            console.log("Retake present");
            this.work_time_attempt.click();
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
                
                const ischeckbox = this.checkbox.isPresent();
                support.waitForParticularElement(2000, this.question_num)
                const question_text = await this.question_num.getText();
                const number_of_que = parseInt( question_text.split("/")[1]);
                console.log("Number of question is :: ", number_of_que);
                // for question 1
                if(number_of_que === 1) {
                    // Checking checkbox is present or not
                    if(ischeckbox) {
                        console.log("Checkbox is present");                
                        // Clicking checkbox
                        support.waitForParticularElement(2000, this.checkbox);
                        this.checkbox.click()

                        support.waitForParticularElement(2000, this.exitButton);
                        this.exitButton.click()


                        /*

                        // Click on submit button
                        support.waitForParticularElement(2000, this.submit_btn);
                        const text = await this.submit_btn.getText();
                        console.log("Text is :: ", text); 
                        this.submit_btn.click();       
                        
                        // check your answer button is present or not
                        support.waitForParticularElement(2000, this.your_ans);
                        const isyour_ans = await this.your_ans.getText();
                        expect(isyour_ans).equal("Your answer");

                        // Check correct ans button is present or not
                        support.waitForParticularElement(2000, this.correct_ans);
                        const is_correct_ans = await this.correct_ans.getText();
                        expect(is_correct_ans).equal("Correct answer");

                        // Checking Your score tab is present or not
                        support.waitForParticularElement(2000, this.your_score);
                        const is_your_score = await this.your_score.getText();
                        expect(is_your_score).equal("Your Score");

                        // Checking explaination tab is present 0r not
                        support.waitForParticularElement(2000, this.explanation);
                        const is_explaination = await this.explanation.getText();
                        expect(is_explaination).equal("Explanation");

                        // checking goto review button present or not
                        support.waitForParticularElement(2000, this.go_to_review);
                        const is_go_to_review = await this.go_to_review.getText();
                        expect(is_go_to_review).equal("Go to review");
                        this.go_to_review.click();

                        // Checking session score is present or not
                        support.waitForParticularElement(2000, this.session_score);
                        const is_session_score = await this.session_score.getText();
                        expect(is_session_score).equal("Session Score")

                        // Clicking on Back option
                        support.waitForParticularElement(2000, this.backoption_score);
                        this.backoption_score.click();

                        // Checking navigated to quantitative page or not
                        support.waitForParticularElement(2000, this.coordinate_geometry);
                        const is_data_interpretation = await this.coordinate_geometry.getText();
                        expect(is_data_interpretation).equal("Co-ordinate Geometry")

                        

                        support.waitForParticularElement(2000, this.quantitativeBack);
                        this.quantitativeBack.click();

                        
                        support.waitForParticularElement(2000, this.quantitativeBtn);
                        const btn = await this.quantitativeBtn.getText();
                        expect(btn).equal("Quantitative") */
                    }
                     else {
                        console.log("Other option is present...!!!")
                    }
                }
                else {
                    console.log("Todo :: questiuon greater than 1 is in progress..")
                } 
            } 
        }
        return console.log("Button is ::" + button_text); 
        
    }
    

    async surfaceAreaVolume(){

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
    
        support.waitForParticularElement(3000,this.quantitativeButton);
        this.quantitativeButton.click();

        support.waitForParticularElement(3000,this.surfaceAreaVolAtt);
        this.surfaceAreaVolAtt.click();

        if (await this.focussPracticeYes.isPresent()) {
            support.waitForParticularElement(5000, this.focussPracticeYes);
            this.focussPracticeYes.click();
        }
            else{
        var i;
        for(i=0;i<=1;i++){
        browser.sleep(2000);
        if (await this.surfaceAreaVolAns.isPresent()) {
       support.waitForParticularElement(5000, this.surfaceAreaVolAns);
       this.surfaceAreaVolAns.click();
            }
        else if (await this.surfaceAreaVolAns1.isPresent()) {
        support.waitForParticularElement(5000, this.surfaceAreaVolAns1);
        this.surfaceAreaVolAns1.click();
        }

        else if (await this.surfaceAreaVolAns2.isPresent()) {
            support.waitForParticularElement(5000, this.surfaceAreaVolAns2);
            this.surfaceAreaVolAns2.click();
            }

            else if (await this.surfaceAreaVolAns3.isPresent()) {
        support.waitForParticularElement(5000, this.surfaceAreaVolAns3);
        this.surfaceAreaVolAns3.click();
        }

        support.waitForParticularElement(3000,this.surfaceAreaVolSubmit);
        this.surfaceAreaVolSubmit.click();
        support.waitForParticularElement(3000,this.surfaceAreaVolCorrectAns);
        this.surfaceAreaVolCorrectAns.click();

        if (await this.surfaceAreaVolNextQue.isPresent()) {
            support.waitForParticularElement(5000, this.surfaceAreaVolNextQue);
            this.surfaceAreaVolNextQue.click();
                 }
             else if (await this.surfaceAreaVolGoToReview.isPresent()) {
             support.waitForParticularElement(5000, this.surfaceAreaVolGoToReview);
             this.surfaceAreaVolGoToReview.click();
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

support.waitForParticularElement(3000,this.quantLabel);
const text7 = await this.quantLabel.getText().then((text)=>{
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
}

module.exports = quantitativePage;
      