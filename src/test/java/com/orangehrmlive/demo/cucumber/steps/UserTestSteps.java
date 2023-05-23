package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.ViewSystemUsersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class UserTestSteps {
    public class UsersSteps {
        @When("^I click on admin tab$")
        public void iClickOnAdminTab() {
            new DashboardPage().clickOnAdminTab();
        }

        @And("^I should be able to verify \"([^\"]*)\" text$")
        public void iShouldBeAbleToVerifyText(String arg0) throws InterruptedException {
            Thread.sleep(3000);
            Assert.assertEquals(new ViewSystemUsersPage().verifySystemUsersText(), "System Users", "Error message found");

        }

        @When("^I click on add button$")
        public void iClickOnAddButton() throws InterruptedException {
            Thread.sleep(1000);
            new ViewSystemUsersPage().clickOnAddButton();
        }

        @And("^I can verify \"([^\"]*)\" text$")
        public void iCanVerifyText(String arg0) {
            Assert.assertEquals(new AddUserPage().verifyAddUserText(), "Add User", "Error message found");

        }

        @And("^I select user role \"([^\"]*)\"$")
        public void iSelectUserRole(String arg0) {
            new ViewSystemUsersPage().selectUserRoleFromDropDown();

        }

        @And("^I enter employee name \"([^\"]*)\"$")
        public void iEnterEmployeeName(String name) throws InterruptedException {
            Thread.sleep(2000);
            new AddUserPage().enterEmployeeName(name);

        }

        @And("^I enter username into username field$")
        public void iEnterUsernameIntoUsernameField() {
            new AddUserPage().enterUsername();
        }

        @And("^I select status \"([^\"]*)\"$")
        public void iSelectStatus(String arg0) throws InterruptedException {
            Thread.sleep(2000);
            new AddUserPage().clickOnStatusSelect();
            new AddUserPage().clickOnDisable();

        }

        @And("^I enter password \"([^\"]*)\"into password field$")
        public void iEnterPasswordIntoPasswordField(String password) {
            new AddUserPage().enterPassword(password);
        }

        @And("^I enter confirm password \"([^\"]*)\"$")
        public void iEnterConfirmPassword(String conPassword) {
            new AddUserPage().enterConfirmPassword(conPassword);

        }

        @And("^I click on save button$")
        public void iClickOnSaveButton() {
            new AddUserPage().clickOnSave();
        }

        @Then("^I am able to verify message \"([^\"]*)\"$")
        public void iAmAbleToVerifyMessage(String arg0) {
            Assert.assertEquals(new AddUserPage().getSuccessfullySavedText(), "Successfully Saved", "Error message found");
        }


        @And("^I click on search button$")
        public void iClickOnSearchButton() throws InterruptedException {
            Thread.sleep(2000);
            new ViewSystemUsersPage().clickOnSearchButton();
        }

        @Then("^I should be able to verify the user should be in result list$")
        public void iShouldBeAbleToVerifyTheUserShouldBeInResultList() {
            Assert.assertEquals(new ViewSystemUsersPage().getUserShouldBeInListText(), "Lavanya", "Error message displayed");
        }

        @When("^I click on check box$")
        public void iClickOnCheckBox() {
            new ViewSystemUsersPage().clickOnCheckBox();
        }

        @And("^I click on delete button$")
        public void iClickOnDeleteButton() {
            new ViewSystemUsersPage().clickOnDeleteButton();
        }

        @And("^Popup will display$")
        public void popupWillDisplay() {

        }

        @Then("^Click on ok button on popup$")
        public void clickOnOkButtonOnPopup() {
            new ViewSystemUsersPage().clickOnYesDeleteButton();
        }

        @And("^I am able to verify text \"([^\"]*)\"$")
        public void iAmAbleToVerifyText(String arg0) {
            Assert.assertEquals(new ViewSystemUsersPage().getSuccessfullyDeletedText(), "Successfully Deleted", "Error message displayed");

        }

        @Then("^I can see message that \"([^\"]*)\"$")
        public void iCanSeeMessageThat(String arg0) {
            Assert.assertEquals(new ViewSystemUsersPage().getNoRecordFoundText(), "No Records Found", "Error message displayed");

        }

        @When("^I enter username \"([^\"]*)\" into username field$")
        public void iEnterUsernameIntoUsernameField(String username) {
            new ViewSystemUsersPage().enterUsername(username);
        }
    }
}
