const { I } = inject();
const settingPageFunction = require("../page/settingPage/index");
const Myfunctions = require("../page/common/functions");
const MyVariable = require("../page/common/variable");

Given("I add new Api Key", () => {
  settingPageFunction.addNewApiKey(MyVariable.apiKey);
});
Given("I edit Api Key", () => {
  settingPageFunction.editApiKey(MyVariable.editNameApiKey);
});
Given("I delete Api Key", () => {
  settingPageFunction.deleteApiKey();
});
