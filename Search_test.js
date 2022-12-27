Feature('Search');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});

Scenario('test 2',  ({ I }) => {
    I.amOnPage('https://www.demoblaze.com/');
    I.click("//a[@id='login2']")
    I.fillField("#loginusername", "admin");
    I.fillField("#loginpassword", "admin");
    I.click("//button[contains(text(),'Log in')]");
    I.see('Sony');
    I.wait(2)
});

