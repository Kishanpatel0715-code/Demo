Feature: Amazon login feature

Scenario: Login amazon scenario with valid credentials

Given user is already on login page
When title is amazon signOn Page
Then user enters email
Then user clicks on continue
Then user enters password
Then user clicks on loginButton
Then user close the browser 
