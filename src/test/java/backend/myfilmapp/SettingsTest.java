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
public class SettingsTest {
	void setup() {}
	
	@Test
	public void testSetting() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone settings
		WebElement settingsIcon = driver.findElement(By.name("settings-page"));
		settingsIcon.click();
		
		// verifie qu'il navigue vers la page settings
		String expectedUrlSettings = "http://localhost:80/setting";
		assertTrue(driver.getCurrentUrl().contains(expectedUrlSettings));
		
		// click sur les bouton sous 'Theme Preferences'
		WebElement h1 = driver.findElement(By.className("theme-title"));
		WebElement btn1 = driver.findElement(By.name("purple"));
		btn1.click();
		
		// verifie que la couleur soit mauve
		assertEquals("blueviolet", h1.getCssValue("color"));
		
		
		
		// login, naviguer vers la page settings, puis click sur deleteBtn, puis verifie qu'il navigue vers la page userDelete
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
		
		settingsIcon.click();
		assertTrue(driver.getCurrentUrl().contains(expectedUrlSettings));
		
		WebElement deleteBtn = driver.findElement(By.name("deleteBtn"));
		deleteBtn.click();
		
		String expectedUrlDelete = "http://localhost:80/userDelete";
		assertEquals(expectedUrlDelete, driver.getCurrentUrl());
		
		
		
		// remplie les champs
		WebElement usernameDelInput = driver.findElement(By.id("username"));
		WebElement passwordDelInput = driver.findElement(By.id("passwd"));
		WebElement confirmDelBtn = driver.findElement(By.id("confirmBtn"));
		usernameDelInput.sendKeys("Kevin");
		passwordDelInput.sendKeys("secret");
		
		// click sur confirmer, puis verifie qu'il navigue vers la page login
		confirmDelBtn.click();
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
	}

}
