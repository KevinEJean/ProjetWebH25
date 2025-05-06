package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.repository.FavoriteListRep;
import backend.myfilmapp.service.FavoriteListService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class FavoritServiceTest {

    @InjectMocks
    private FavoriteListService service;

    @Mock
    private FavoriteListRep rep;

    @Test 
    public void FavoriteListRep_Save_ReturnData() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	when(rep.save(favorite)).thenReturn(favorite);
    	
    	FavoriteList savedList = rep.save(favorite);
    	
    	assertEquals(savedList, favorite);
    }
    
    @Test 
    public void FavoriteListRep_GetByClientId_ReturnData() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	when(rep.findByClientIdId(client.getId())).thenReturn(List.of(favorite));
    	
    	List<FavoriteList> savedList = rep.findByClientIdId(client.getId());
    	
    	assertEquals(savedList, List.of(favorite));
    }
    
    @Test 
    public void FavoriteListRep_GetByMovieId_ReturnData() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	when(rep.findByMovieApiId(5)).thenReturn(favorite);
    	
    	FavoriteList savedData = rep.findByMovieApiId(5);
    	
    	assertEquals(savedData, favorite);
    }
    
    @Test 
    public void FavoriteListRep_GetByClientIdAndMovieId_ReturnData() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	when(rep.findByClientIdAndMovieApiId(client, 5)).thenReturn(favorite);
    	
    	FavoriteList savedData = rep.findByClientIdAndMovieApiId(client, 5);
    	
    	assertEquals(savedData, favorite);
    }
    
    @Test
    public void FavoriteListService_Add_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	assertTrue(service.addFavorite(client.getId(), favorite));
    }
    
    @Test
    public void FavoriteListService_Delete_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	assertTrue(service.deleteFavorite(client.getId(), favorite.getMovieApiId()));
    }
    
    @Test
    public void FavoriteListService_Exist_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	FavoriteList favorite = new FavoriteList(client, 5, "Avengers", "https://avengers.com/", "movie", LocalDateTime.now());
    	
    	assertTrue(service.isFavorite(client.getId(), favorite.getMovieApiId()));
    }
}