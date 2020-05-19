const global = require("../Support/Global");
// const support = new global();
const EC = browser.ExpectedConditions;

class ElementHelperjs {
    waitForParticularElement(time,ele){
        browser.waitForAngularEnabled(false);
        browser.sleep(time);
        browser.wait(ele.isEnabled());
        browser.wait(EC.visibilityOf(ele));
        browser.wait(EC.elementToBeClickable(ele));
        return ele;
    }
}
module.exports = ElementHelperjs;