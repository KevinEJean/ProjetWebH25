package backend.myfilmapp.unitaire;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.TimeUnit;

@SpringBootTest
public class LoginTest {
	public void setUp() {}
	
	@Test
	public void testLogin() throws Exception {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver(); // same test but with chrome and firefox
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());

		// click sur 'Don't have an account?' (naviguer vers la page signUp)
		WebElement toSignUp = driver.findElement(By.name("toSignUp"));
		toSignUp.click();

		// verifie qu'il navigue vers la page signUp
		String expectedUrlSignUp = "http://localhost/signUp";
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

		TimeUnit.SECONDS.sleep(3);

		String expectedUrl = "http://localhost/profil";
		assertEquals(expectedUrl, driver.getCurrentUrl());

		WebElement logoutBtn = driver.findElement(By.id("logout"));
		logoutBtn.click();

		TimeUnit.SECONDS.sleep(2);
		
		// remplie les champs, puis click sur le bouton login
		WebElement usernameLoginInput = driver.findElement(By.name("username"));
		WebElement passwordLoginInput = driver.findElement(By.name("password"));
		WebElement loginBtn = driver.findElement(By.id("login-btn"));
		usernameLoginInput.sendKeys("kevin");
		passwordLoginInput.sendKeys("secret");
		loginBtn.click();

		TimeUnit.SECONDS.sleep(2);
		
		// verifie qu'il navigue vers la page profil
		String expectedUrlProfil = "http://localhost/profil";
		assertEquals(expectedUrlProfil, driver.getCurrentUrl());
		
		// verifie que les données de l'utilisateur soit affiché
		String usernameInfo = driver.findElement(By.id("username")).getAttribute("value");
		assertEquals("kevin", usernameInfo);
		String passwordInfo = driver.findElement(By.id("password")).getAttribute("value");
		assertEquals("secret", passwordInfo);
		String emailInfo = driver.findElement(By.id("email")).getAttribute("value");
		assertEquals("kj@mail.com", emailInfo);



		
		TimeUnit.SECONDS.sleep(2);





		// ouvre le site web
		WebDriver driver = new EdgeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());

		// click sur 'Don't have an account?' (naviguer vers la page signUp)
		WebElement toSignUp = driver.findElement(By.name("toSignUp"));
		toSignUp.click();

		// verifie qu'il navigue vers la page signUp
		String expectedUrlSignUp = "http://localhost/signUp";
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

		TimeUnit.SECONDS.sleep(3);

		String expectedUrl = "http://localhost/profil";
		assertEquals(expectedUrl, driver.getCurrentUrl());

		WebElement logoutBtn = driver.findElement(By.id("logout"));
		logoutBtn.click();

		TimeUnit.SECONDS.sleep(2);
		
		// remplie les champs, puis click sur le bouton login
		WebElement usernameLoginInput = driver.findElement(By.name("username"));
		WebElement passwordLoginInput = driver.findElement(By.name("password"));
		WebElement loginBtn = driver.findElement(By.id("login-btn"));
		usernameLoginInput.sendKeys("kevin");
		passwordLoginInput.sendKeys("secret");
		loginBtn.click();

		TimeUnit.SECONDS.sleep(2);
		
		// verifie qu'il navigue vers la page profil
		String expectedUrlProfil = "http://localhost/profil";
		assertEquals(expectedUrlProfil, driver.getCurrentUrl());
		
		// verifie que les données de l'utilisateur soit affiché
		String usernameInfo = driver.findElement(By.id("username")).getAttribute("value");
		assertEquals("kevin", usernameInfo);
		String passwordInfo = driver.findElement(By.id("password")).getAttribute("value");
		assertEquals("secret", passwordInfo);
		String emailInfo = driver.findElement(By.id("email")).getAttribute("value");
		assertEquals("kj@mail.com", emailInfo);
	}
}
