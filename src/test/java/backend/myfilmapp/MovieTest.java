package backend.myfilmapp;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MovieTest {
	void setup() {}
	
	@Test
	public void testMovie() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone movie
		WebElement movieIcon = driver.findElement(By.name("movie-page"));
		movieIcon.click();
		
		// verifie qu'il navigue vers la page movie
		String expectedUrlMovie = "http://localhost:80/movie";
		assertTrue(driver.getCurrentUrl().contains(expectedUrlMovie));
		
		// verifie que les fonctions de filtre fonctionne
		WebElement latestBtn = driver.findElement(By.id("latest-flt"));
		WebElement trendingBtn = driver.findElement(By.id("trending-flt"));
		WebElement topRatedBtn = driver.findElement(By.id("topRated-flt"));
		trendingBtn.click();
		latestBtn.click();
		topRatedBtn.click();
		latestBtn.click();
		// expected ?
		
		// verifie que les fonctions de filtre par genre fonctionne
		WebElement genreBtn = driver.findElement(By.id("genre"));
		WebElement actionGenreBtn = driver.findElement(By.id("28"));
		WebElement adventureGenreBtn = driver.findElement(By.id("12"));
		WebElement confirmBtn = driver.findElement(By.id("confirmGenreBtn"));
		genreBtn.click();
		actionGenreBtn.click();
		adventureGenreBtn.click();
		confirmBtn.click();
		// expected ?
	}
}
