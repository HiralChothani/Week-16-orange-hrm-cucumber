$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login successfully",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12518313600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should login successfully",
  "description": "",
  "id": "login-test;verify-user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify message \"Dashboard\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should login successfully",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 289710100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 618253900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 388243000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 131831400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 36
    }
  ],
  "location": "LoginSteps.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 1277948200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.after({
  "duration": 197600,
  "status": "passed"
});
formatter.before({
  "duration": 9067515000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the logo display on home page",
  "description": "",
  "id": "login-test;verify-the-logo-display-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to verify the  logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 759963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 366884200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 118782300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToVerifyTheLogoIsDisplayed()"
});
formatter.result({
  "duration": 1655088600,
  "status": "passed"
});
formatter.after({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 17764368800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should logout successfully",
  "description": "",
  "id": "login-test;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on user profile logo",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on logout and click",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can verify the text \"Login Panel\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 213900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1436678300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 242346900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 182877100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 2003562400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iMouseHoverOnLogoutAndClick()"
});
formatter.result({
  "duration": 2113655400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Panel",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iCanVerifyTheTextIsDisplayed(String)"
});
formatter.result({
  "duration": 1238199500,
  "status": "passed"
});
formatter.after({
  "duration": 187000,
  "status": "passed"
});
formatter.uri("usertest.feature");
formatter.feature({
  "line": 2,
  "name": "Users Test",
  "description": "As a user admin should add user successfully",
  "id": "users-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 22831267000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to verify \"System Users\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1882989200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 251450300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1599815800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Verify admin should delete the user successfully",
  "description": "",
  "id": "users-test;verify-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I enter username \"Lavanya\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should be able to verify the user should be in result list",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click on check box",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on ok button on popup",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I am able to verify text \"Successfully Deleted\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 35900,
  "status": "passed"
});
});