package backend.myfilmapp;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class LoginTest {
	public void setUp() {}
	
	@Test
	public void testLogin() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost:80/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
		
		// remplie les champs, puis click sur le bouton login
		WebElement usernameInput = driver.findElement(By.name("username"));
		WebElement passwordInput = driver.findElement(By.name("password"));
		WebElement loginBtn = driver.findElement(By.id("login-btn"));
		usernameInput.sendKeys("kevin");
		passwordInput.sendKeys("secret");
		loginBtn.click();
		
		// verifie qu'il navigue vers la page profil
		String expectedUrlProfil = "http://localhost:80/profil";
		assertEquals(expectedUrlProfil, driver.getCurrentUrl());
		
		// verifie que les données de l'utilisateur soit affiché
		String usernameInfo = driver.findElement(By.name("username")).getText();
		assertEquals("kevin", usernameInfo);
		String passwordInfo = driver.findElement(By.name("password")).getText();
		assertEquals("secret", passwordInfo);
		String emailInfo = driver.findElement(By.name("email")).getText();
		assertEquals("kj@mail.com", emailInfo);
	}
}
