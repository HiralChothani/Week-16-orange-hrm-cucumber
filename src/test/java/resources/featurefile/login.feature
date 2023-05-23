Feature: Login Test
  As a user I want to login successfully

  @sanity @regression
  Scenario: Verify user should login successfully
    Given I am on homepage
    When  I enter username "Admin"
    And   I enter password "admin123"
    And   I click on login button
    Then  I should be able to verify message "Dashboard"
    And   I should login successfully

  @smoke @regression
  Scenario:  Verify the logo display on home page
    Given I am on homepage
    When  I enter username "Admin"
    And   I enter password "admin123"
    And   I click on login button
    Then  I should be able to verify the  logo is displayed

  @regression @regression
  Scenario: Verify user should logout successfully
    Given I am on homepage
    When  I enter username "Admin"
    And   I enter password "admin123"
    And   I click on login button
    Then  I click on user profile logo
    And   I mouse hover on logout and click
    Then  I can verify the text "Login Panel" is displayed
