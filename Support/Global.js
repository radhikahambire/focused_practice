const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");

class Global {
    constructor(){
        this.expect = chai.expect;
        chai.use(chaiAsPromise());
    }
}

module.exports = Global;