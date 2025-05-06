package backend.myfilmapp.selenium;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SerieTest {
	
	@Test
	public void testSerie() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone serie
		WebElement serieIcon = driver.findElement(By.name("serie-page"));
		serieIcon.click();
		
		// verifie qu'il navigue vers la page serie
		String expectedUrlSerie = "http://localhost/serie";
		assertTrue(driver.getCurrentUrl().contains(expectedUrlSerie));
		
		// verifie que les fonctions de filtre par genre fonctionne
		WebElement genreBtn = driver.findElement(By.id("genre"));
		WebElement actionAndAdventureGenreBtn = driver.findElement(By.id("10759"));
		WebElement confirmBtn = driver.findElement(By.id("confirmGenreBtn"));
		genreBtn.click();
		actionAndAdventureGenreBtn.click();
		confirmBtn.click();

		// expected ?
	}
}
