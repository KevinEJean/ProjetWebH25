package backend.myfilmapp;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SignUpTest {
	public void setUp() {}
	
	@Test
	public void testSignUp() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost:80/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
		
		// click sur 'Don't have an account?' (naviguer vers la page signUp)
		WebElement toSignUp = driver.findElement(By.name("toSignUp"));
		toSignUp.click();
		
		// verifie qu'il navigue vers la page signUp
		String expectedUrlSignUp = "http://localhost:80/signUp";
		assertEquals(expectedUrlSignUp, driver.getCurrentUrl());
		
		WebElement usernameInput = driver.findElement(By.name("username"));
		WebElement emailInput = driver.findElement(By.name("email"));
		WebElement passwordInput = driver.findElement(By.name("password"));
		WebElement passwordVerifInput = driver.findElement(By.name("passwordVerif"));
		WebElement signUpBtn = driver.findElement(By.className("submit"));
		
		usernameInput.sendKeys("kevin");
		emailInput.sendKeys("kj@mail.com");
		passwordInput.sendKeys("secret");
		passwordVerifInput.sendKeys("secret");
		signUpBtn.click();
		
		String expectedUrl = "http://localhost:80/profil";
		assertEquals(expectedUrl, driver.getCurrentUrl());
		
		// verifie que les données de l'utilisateur soit affiché
		String usernameInfo = driver.findElement(By.name("username")).getText();
		assertEquals("kevin", usernameInfo);
		String passwordInfo = driver.findElement(By.name("password")).getText();
		assertEquals("secret", passwordInfo);
		String emailInfo = driver.findElement(By.name("email")).getText();
		assertEquals("kj@mail.com", emailInfo);
	}
}
