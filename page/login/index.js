const { I } = inject();
const loginLocator = require("./locator");
const timeout = require("../common/timeout");
const customMethod = require("../../utils/customMethod");
module.exports = {
  login(url, email, password) {
    I.amOnPage(url);
    customMethod.fieldValue(loginLocator.emailField, email);
    customMethod.fieldValue(loginLocator.passwordField, password);
    customMethod.clickElement(loginLocator.loginButton);
    I.waitForElement(loginLocator.logoDiv, timeout.waitForElement);
  },
};
