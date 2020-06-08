const loginJSON = require("../testData/login");
const elementHelper = require("../Support/ElementHelperjs");
const support = new elementHelper();
const chai = require('chai');
let expect = chai.expect;

class loginPage {
    constructor(){
        this.username = element(by.css("section:nth-child(2) > div:nth-child(2) > app-iro-inputbox:nth-child(2) > section > mat-form-field > div > div:nth-child(1) > div > input "));
        this.password = element(by.css("section:nth-child(2) > div:nth-child(2) > app-iro-inputbox:nth-child(3) > section > mat-form-field > div > div:nth-child(1) > div > input "));
        this.loginBtn = element(by.css("section:nth-child(2) > div:nth-child(2) > div > app-iro-button > button"));
        this.dashboard = element(by.css("mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > p:nth-child(1)"));

        //button css of focused practice page
        this.focuspractice = element(by.css('mat-drawer-content > div > div > app-iro-side-bar > div > ul >li:nth-child(3)'));
        this.quantitative = element(by.css('app-homework-student-dashboard > div > mat-card > div > app-iro-button:nth-child(1) > button'));
        this.verbal = element(by.css("app-homework-student-dashboard > div > mat-card > div > app-iro-button:nth-child(2) > button"));
        this.bookmark_view = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div:nth-child(3)>app-iro-button > button > span"));
        this.mynotes_view = element(by.css('app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div:nth-child(3)>app-iro-button > button > span'));

        //text css of focused practice page
        this.bookmarked_questions = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div:nth-child(1) > p"));
        this.my_notes = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div:nth-child(1) > p"));
        this.select_section = element(by.css("app-homework-student-dashboard > div > mat-card:nth-child(1) > p"))
        this.focused_practice = element(by.css("div > mat-toolbar > mat-toolbar-row > p"));
        this.set_attempted = element(by.css("app-homework-student-dashboard > div > mat-card:nth-child(3) > div:nth-child(1) > p "));

        //Bookmarked questions css
        this.verbal_question = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div:nth-child(2)  > div:nth-child(2) > p:nth-child(2)"));
        this.quantitative_question = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(1) > div:nth-child(2)  > div:nth-child(3) > p:nth-child(2)"));
        this.no_question_msg = element(by.css("app-homework-result-container > div > mat-card > div:nth-child(2) > p"));
        this.back_arrow_bookmark = element(by.css("mat-toolbar > mat-toolbar-row > div:nth-child(1)"))

        //My notes css
        this.verbal_que_mynotes = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div:nth-child(2)  > div:nth-child(2) > p:nth-child(2)"));
        this.quantitative_que_mynotes = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div:nth-child(2)  > div:nth-child(3) > p:nth-child(2)"));
        this.no_que_message_mynotes = element(by.css("app-homework-result-container  > div > mat-card > div:nth-child(2) > p"));
        this.quant = element(by.css("app-homework-student-dashboard > div > div > mat-card:nth-child(2) > div:nth-child(2)  > div:nth-child(3) > p:nth-child(1)"))
        this.back_option = element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted"));
    }
    async login(){
        //Navigate to login page
        browser.get(loginJSON.login.url);

        // Enter username
        support.waitForParticularElement(2000, this.username);
        this.username.sendKeys(loginJSON.login.username);

        //Enter password
        support.waitForParticularElement(2000, this.password);
        this.password.sendKeys(loginJSON.login.password);

        //Click on login button
        support.waitForParticularElement(2000, this.loginBtn);
        this.loginBtn.click();

        //Varify dashboard text is present or not on Dashboard
        support.waitForParticularElement(4000, this.dashboard);
        const dashboard_text = await this.dashboard.getText().then((text)=>{
            return text;
        });
        console.log(dashboard_text);
        return expect(dashboard_text).equal('Dashboar');        
    }
    async focusedpractice(){
        support.waitForParticularElement(3000, this.focuspractice);
        this.focuspractice.click();

        //Checking Focused Practice text is present or not on page
        support.waitForParticularElement(2000, this.focused_practice);
        const focused_practicetext = await this.focused_practice.getText().then((text)=>{
            return text;
        })
        console.log(focused_practicetext)
        expect(focused_practicetext).equal('Focused Practice');

        // Checking select section is present or not
        support.waitForParticularElement(2000, this.select_section);
        const select_sectiontext = await this.select_section.getText().then((text)=>{
            return text
        });
        console.log(select_sectiontext);
        expect(select_sectiontext).equal('Select Section');

        //Checking quantitative button is present or not
        support.waitForParticularElement(2000, this.quantitative);
        const quantitativeBtn = await this.quantitative.getText().then((text)=>{
            return text
        })
        console.log(quantitativeBtn);
        expect(quantitativeBtn).equal('Quantitative')

        // Checking Verbal button is present or not
        support.waitForParticularElement(2000, this.verbal);
        const verbalBtn = await this.verbal.getText().then((text)=>{
            return text;
        });
        console.log(verbalBtn);
        expect(verbalBtn).equal('Verbal');

        // Checking Bookmarked question field is present or not
        support.waitForParticularElement(2000, this.bookmarked_questions);
        const bookmarked = await this.bookmarked_questions.getText().then((text)=>{
            return text
        });
        console.log(bookmarked);
        expect(bookmarked).equal('Bookmarked Questions');

        //Checking view button present on Bookmarked question field or not
        support.waitForParticularElement(2000, this.bookmark_view);
        const viewBtn = await this.bookmark_view.getText().then((text)=>{
            return text;
        });
        console.log(viewBtn);
        expect(viewBtn).equal("View");

        // Checking My Notes field present or not
        support.waitForParticularElement(2000, this.my_notes);
        const mynotes = await this.my_notes.getText().then((text)=>{
            return text;
        });
        console.log(mynotes);
        expect(mynotes).equal("My Notes");

        // Checking View button of My Notes field
        support.waitForParticularElement(2000, this.mynotes_view);
        const viewBtn1 = await this.mynotes_view.getText().then((text)=>{
            return text;
        })
        console.log(viewBtn1);
        expect(viewBtn1).equal("View");

        // Checking Set Attempted field is present or not
        support.waitForParticularElement(2000, this.set_attempted);
        const setattempted = await this.set_attempted.getText().then((text)=>{
            return text;
        });
        console.log(setattempted);
        return expect(setattempted).equal("Set Attempted")
    }
    async bookmarkedquestions() {
        // Checking verbal questions available
        support.waitForParticularElement(2000, this.verbal_question);
        const verbal_que_number = await this.verbal_question.getText().then((text)=>{
            return text;
        });
        const verbal_number = verbal_que_number.split("")[0];

        // Checking quantitative questions available
        support.waitForParticularElement(2000, this.quantitative_question);
        const quant_que_number = await this.quantitative_question.getText().then((text)=>{
            return text;
        });
        const quant_number = quant_que_number.split(" ")[0];
        const total_number_of_que = parseInt(verbal_number) + parseInt(quant_number)

        // Click on View button
        support.waitForParticularElement(2000, this.bookmark_view);
        this.bookmark_view.click();

        //Checking bookmarked list is present or not
        if(total_number_of_que > 0) {
            console.log("Inside if..!!")
            let section_arr = [];
            let number = total_number_of_que
            while(number > 0) {                
                const section = element(by.css("app-homework-result-container > div > mat-card > div:nth-child(3) > div:nth-child(" + number + ") > div:nth-child(3)"));
                support.waitForParticularElement(2000, section);                
                const sectionType = await section.getText().then((text)=>{
                    return text;
                })
                console.log(sectionType);
                section_arr.push(sectionType);
                number = number - 1;
            }
            // console.log("Length of array is :: ", section_arr.length);
            expect(section_arr.length).equal(total_number_of_que);

            // Click on Back arrow
            support.waitForParticularElement(2000, this.back_arrow_bookmark);
            this.back_arrow_bookmark.click();
            console.log("Arrow clicked..!!");
        }
        else {
            support.waitForParticularElement(2000, this.no_question_msg);
            const message = await this.no_question_msg.getText().then((text)=>{
                return text;
            });
            console.log(message);
            expect(message).equal("No questions are available for review.");
            // Click on Back arrow
            support.waitForParticularElement(2000, element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted")));
            console.log("Clicking back arrow..!!");
            browser.sleep(2000);
            element(by.css("body > app-root > app-home > mat-drawer-container > mat-drawer-content > div > div > div > mat-toolbar > mat-toolbar-row > div.cbt-back-button.pointer.ng-star-inserted")).click();
            // this.back_arrow_bookmark.click();
            browser.sleep(5000);
        }
        browser.sleep(5000);
        support.waitForParticularElement(2000, this.quantitative_question);
        const quant_que_num = await this.quantitative_question.getText().then((text)=>{
            return text;
        });
        const quant_num = quant_que_num.split(" ")[0];
        const total_num_of_que = parseInt(verbal_number) + parseInt(quant_num)
        return console.log("Total question :: ", total_number_of_que);

    }
    async mynotes(){
        // Checking verbal questions available
       support.waitForParticularElement(2000,this.verbal_que_mynotes);
       const verbal_que_mynotes_num = await this.verbal_que_mynotes.getText().then((text)=>{
           return text;
       });
       const numb_verbal = verbal_que_mynotes_num.split(" ")[0];
       // Checking quantitative question available
       const quantitative_que_mynotes_num = await this.quantitative_que_mynotes.getText().then((text)=>{
           return text;
       })
       const numb_quantitative = quantitative_que_mynotes_num.split(" ")[0];
       const total_question = parseInt(numb_verbal) + parseInt(numb_quantitative);

       // Click on View button
       support.waitForParticularElement(2000,this.mynotes_view);
       this.mynotes_view.click();
       if(total_question > 0){
            let section_arr = [];
            let number = total_question;
            while(number > 0) {                
                const section = element(by.css("app-homework-result-container > div > mat-card > div:nth-child(3) > div:nth-child(" + number + ") > div:nth-child(3) >p"));
                support.waitForParticularElement(4000, section);                
                const sectionType = await section.getText().then((text)=>{
                    return text;
                })
                console.log(sectionType);
                section_arr.push(sectionType);
                number = number - 1;
            }
            // console.log("Length of array is :: ", section_arr.length);
            expect(section_arr.length).equal(total_question);
            support.waitForParticularElement(2000, this.back_option);
            this.back_option.click();
       }
       else {
           support.waitForParticularElement(2000, this.no_que_message_mynotes);
           const message = await this.no_que_message_mynotes.getText().then((text)=>{
               return text;
           });
           console.log("Text message :: ", message);
           support.waitForParticularElement(2000, this.back_option);
           this.back_option.click();

       }
       support.waitForParticularElement(2000,this.quant)
       const qunat_text = await this.quant.getText().then((text)=>{
           return text;
       })
    //    console.log("QUantitative text :: ", qunat_text)
       return console.log("My notes :: ", total_question);
    }
}

module.exports = loginPage;
