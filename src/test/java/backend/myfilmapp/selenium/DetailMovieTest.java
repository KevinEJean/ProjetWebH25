package backend.myfilmapp.selenium;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.TimeUnit;

@SpringBootTest
public class DetailMovieTest {
	void setup() {}
	
	@Test
	public void testDetailMovie() throws Exception {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();

		TimeUnit.SECONDS.sleep(1);
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
		
		// click sur l'icone home
		WebElement homeIcon = driver.findElement(By.name("home-page"));
		homeIcon.click();

		TimeUnit.SECONDS.sleep(1);
		
		// verifie qu'il navigue vers la page home
		String expectedUrlHome = "http://localhost/";
		assertEquals(expectedUrlHome, driver.getCurrentUrl());
		
		// click sur un film
		WebElement movie = driver.findElement(By.className("content__shows"));
		movie.click();

		TimeUnit.SECONDS.sleep(1);
		
		// verifie qu'il navigue vers le film
		assertTrue(driver.getCurrentUrl().contains("#loaded"));
		
		// verifie que les informations sont affichés
		WebElement title = driver.findElement(By.id("movieTitle"));
		assertFalse(title.getAttribute("textContent").equals("Undefined"));
	}
}
