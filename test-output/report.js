$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_workspace/FreeAmazonBddFreamwork1/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon login feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login amazon scenario with valid credentials",
  "description": "",
  "id": "amazon-login-feature;login-amazon-scenario-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is amazon signOn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on loginButton",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 2972531500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_is_amazon_signOn_Page()"
});
formatter.result({
  "duration": 9397100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_email()"
});
formatter.result({
  "duration": 174619600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_continue()"
});
formatter.result({
  "duration": 681169000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_password()"
});
formatter.result({
  "duration": 62732300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_loginButton()"
});
formatter.result({
  "duration": 81554100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_close_the_browser()"
});
formatter.result({
  "duration": 656438400,
  "status": "passed"
});
});