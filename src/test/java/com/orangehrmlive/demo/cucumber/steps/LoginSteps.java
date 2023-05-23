package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new LoginPage().enterUserName(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should be able to verify message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyMessage(String arg0)  {
        Assert.assertEquals(new DashboardPage().getDashboardText(),"Dashboard", "Error message");

    }

    @And("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @Then("^I should be able to verify the  logo is displayed$")
    public void iShouldBeAbleToVerifyTheLogoIsDisplayed() {
        new HomePage().verifyLogoIsDisplayed();
    }

    @Then("^I click on user profile logo$")
    public void iClickOnUserProfileLogo() {
        new HomePage().clickOnUserProfileLogo();
    }

    @And("^I mouse hover on logout and click$")
    public void iMouseHoverOnLogoutAndClick() {
        new LoginPage().mouseHoverAndClickOnLogout();
    }

    @Then("^I can verify the text \"([^\"]*)\" is displayed$")
    public void iCanVerifyTheTextIsDisplayed(String arg0) {
        new LoginPage().getLoginText();

    }
}
