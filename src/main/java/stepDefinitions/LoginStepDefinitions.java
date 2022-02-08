package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitions {

	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C:\\Seleniumjars\\new chromedriver4\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.amazon.ca/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.ca%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=caflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("^title is amazon signOn Page$")
	public void title_is_amazon_signOn_Page() throws Throwable {
	  String title = driver.getTitle();
	  Assert.assertEquals(title, "Amazon Sign In");
	}

	@Then("^user enters email$")
	public void user_enters_email() throws Throwable {
		driver.findElement(By.name("email")).sendKeys("niralip453@gmail.com");
	}

	@Then("^user clicks on continue$")
	public void user_clicks_on_continue() throws Throwable {
	   driver.findElement(By.id("continue")).click();
	}

	@Then("^user enters password$")
	public void user_enters_password() throws Throwable {
		driver.findElement(By.name("password")).sendKeys("Ilk2019!");
	}

	@Then("^user clicks on loginButton$")
	public void user_clicks_on_loginButton() throws Throwable {
	   driver.findElement(By.id("signInSubmit")).click();
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws Throwable {
	    driver.quit();
	}
}
