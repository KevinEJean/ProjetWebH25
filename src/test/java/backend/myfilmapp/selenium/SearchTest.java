package backend.myfilmapp.selenium;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.TimeUnit;

@SpringBootTest
public class SearchTest {
	void setup() {}
	
	@Test
	public void testSearch() throws Exception {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone search
		WebElement settingsIcon = driver.findElement(By.className("search"));
		settingsIcon.click();
		
		// verifie qu'il navigue vers la page search
		String expectedUrlSettings = "http://localhost/search";
		assertEquals(expectedUrlSettings, driver.getCurrentUrl());
		
		
		/*          TEST MOVIE           */
		
		
		// rempli le champs et click sur searchBtn
		WebElement searchInput = driver.findElement(By.className("searchTerm"));
		WebElement searchBtn = driver.findElement(By.className("searchButton"));
		searchInput.sendKeys("spider-man");
		searchBtn.click();

		TimeUnit.SECONDS.sleep(1);
		
		// verifie qu'il affiche les bons items
		WebElement movieNames = driver.findElement(By.className("name"));
		assertTrue(movieNames.getAttribute("textContent").contains("Spider-Man"));
		
		
		/*          TEST SERIE           */
		TimeUnit.SECONDS.sleep(3);
		
		
		// click sur le selecteur de genre, puis click sur serie
		WebElement genreSelector = driver.findElement(By.id("genreSelect"));
		genreSelector.click();
		WebElement serieBtn = driver.findElement(By.id("genreTv"));
		serieBtn.click();
		
		// rempli le champs et click sur searchBtn
		searchInput.sendKeys("breaking bad");
		searchBtn.click();
		
		// verifie qu'il affiche les bons items
		WebElement serieNames = driver.findElement(By.className("name"));
		assertTrue(serieNames.getAttribute("textContent").contains("Breaking Bad"));
	}
}
