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
public class DetailMovieTest {
	void setup() {}
	
	@Test
	public void testDetailMovie() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone profil
		WebElement profilIcon = driver.findElement(By.name("profil-page"));
		profilIcon.click();
		
		// verifie qu'il navigue vers la page login
		String expectedUrlLogin = "http://localhost:80/login";
		assertEquals(expectedUrlLogin, driver.getCurrentUrl());
		
		// click sur l'icone home
		WebElement homeIcon = driver.findElement(By.name("home-page"));
		homeIcon.click();
		
		// verifie qu'il navigue vers la page home
		String expectedUrlHome = "http://localhost:80/";
		assertEquals(expectedUrlHome, driver.getCurrentUrl());
		
		// click sur un film
		WebElement movie = driver.findElement(By.className("title-box"));
		movie.click();
		
		// verifie qu'il navigue vers le film
		assertTrue(driver.getCurrentUrl().contains("#loaded"));
		
		// verifie que les informations sont affichés
		// assertTrue(driver.findElement(By.?(""));
	}
}
