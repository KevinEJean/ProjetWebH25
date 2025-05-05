package backend.myfilmapp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SportsTest {
	void setup() {}
	
	@Test
	public void testSports() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		
		
		// login
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		String expectedUrlLogin = "http://localhost:80/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
		WebElement usernameInput = driver.findElement(By.name("username"));
		WebElement passwordInput = driver.findElement(By.name("password"));
		WebElement loginBtn = driver.findElement(By.id("login-btn"));
		usernameInput.sendKeys("kevin");
		passwordInput.sendKeys("secret");
		loginBtn.click();
		String expectedUrlProfil = "http://localhost:80/profil";
		assertEquals(expectedUrlProfil, driver.getCurrentUrl());
		String usernameInfo = driver.findElement(By.name("username")).getText();
		assertEquals("kevin", usernameInfo);
		String passwordInfo = driver.findElement(By.name("password")).getText();
		assertEquals("secret", passwordInfo);
		String emailInfo = driver.findElement(By.name("email")).getText();
		assertEquals("kj@mail.com", emailInfo);
		
		
		
		// click sur l'icone sport
		WebElement sportsIcon = driver.findElement(By.name("sports-page"));
		sportsIcon.click();
		
		// verifie qu'il navigue vers la page sport
		String expectedUrlSports = "http://localhost:80/sports";
		assertTrue(driver.getCurrentUrl().contains(expectedUrlSports));
	}
}
