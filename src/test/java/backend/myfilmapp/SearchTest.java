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
public class SearchTest {
	void setup() {}
	
	@Test
	public void testSearch() {
		
		// ouvre le site web
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:80/");
		
		// click sur l'icone search
		WebElement settingsIcon = driver.findElement(By.className("search"));
		settingsIcon.click();
		
		// verifie qu'il navigue vers la page search
		String expectedUrlSettings = "http://localhost:80/search";
		assertEquals(expectedUrlSettings, driver.getCurrentUrl());
		
		
		/*          TEST MOVIE           */
		
		
		// rempli le champs et click sur searchBtn
		WebElement searchInput = driver.findElement(By.className("searchTerm"));
		WebElement searchBtn = driver.findElement(By.className("searchButton"));
		searchInput.sendKeys("spider-man");
		searchBtn.click();
		
		// verifie qu'il affiche les bons items
		WebElement movieNames = driver.findElement(By.className("name"));
		assertTrue(movieNames.getText().contains("Spider-Man")); // peut être dans un for loop
		
		
		/*          TEST SERIE           */
		
		
		// click sur le selecteur de genre, puis click sur serie
		WebElement genreSelector = driver.findElement(By.id("genreSelect"));
		genreSelector.click();
		WebElement serieBtn = driver.findElement(By.id("genreTv"));
		serieBtn.click();
		
		// rempli le champs et click sur searchBtn
		searchInput.sendKeys("batman");
		searchBtn.click();
		
		// verifie qu'il affiche les bons items
		WebElement serieNames = driver.findElement(By.className("name"));
		assertTrue(serieNames.getText().contains("Batman")); // peut être dans un for loop
	}
}
