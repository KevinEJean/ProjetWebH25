package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.service.FavoriteListService;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class FavoritServiceTest {

    @InjectMocks
    private FavoriteListService service;
    
    @Test
    public void FavoriteListService_Add_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	assertFalse(service.addFavorite(1, favorite)); // car ils ne sont pas dans la bd donc retourne false
    }
    
    @Test
    public void FavoriteListService_Delete_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());

		assertFalse(service.deleteFavorite(1, favorite.getMovieApiId())); // car ils ne sont pas dans la bd donc retourne false
    }
    
    @Test
    public void FavoriteListService_Exist_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());

		assertFalse(service.isFavorite(1, favorite.getMovieApiId())); // car ils ne sont pas dans la bd donc retourne false
    }

	@Test
	public void FavoriteListService_GetById_ReturnList() {

		Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
		FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());

		List<FavoriteList> returnedList = service.getListById(1);

		assertNull(returnedList); // car ils ne sont pas dans la bd donc retourne false
	}
}