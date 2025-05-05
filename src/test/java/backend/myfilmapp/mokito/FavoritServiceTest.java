package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.AutoWired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DatajpaTest;

@DataJpaTest
public class FavoritServiceTest {

    @AutoWired
    private FavoriteListService service;

    @AutoWired
    private FavoriteListRep favoritRep;

    @AutoWired
    private ClientRep clientRep;

    @Test 
    public void FavoriteListService_Save_ReturnBoolean() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        FavoriteList favorite = FavoriteList.builder()
                .movieApiId(200)
                .build();
        
        // Act & Assert
        Assertions.assertTrue(service.addFavorite(client.getId(), favorite));
    }

    @Test 
    public void FavoriteListService_Delete_ReturnBoolean() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        FavoriteList favorite = FavoriteList.builder()
                .movieApiId(200)
                .clientId(client.getId())
                .build();

        clientRep.save(client);
        favoritRep.save(favorite);
        
        // Act & Assert
        Assertions.assertTrue(service.deleteFavorite(client.getId(), 200));
    }

    @Test 
    public void FavoriteListService_Duplicate_ReturnBoolean() {

        /* ################### JE COMPREND PAS isFavorite ################### */

        // // Arrange
        // Client client = Client.builder()
        //         .username("testUser")
        //         .password("secret")
        //         .email("test@mail.com")
        //         .build();

        // FavoriteList favorite = FavoriteList.builder()
        //         .movieApiId(200).build();
        
        // FavoriteList favorite2 = FavoriteList.builder()
        //         .movieApiId(200).build();

        // clientRep.save(client);
        // favoritRep.save(favorite);
        
        // // Act & Assert
        // Assertions.assertTrue(service.isFavorite(client.getId(), 200)); // ou assertFalse ????
    }

    @Test 
    public void FavoriteListService_GetById_ReturnList() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        FavoriteList favorite = FavoriteList.builder()
                .movieApiId(200)
                .clientId(client.getId())
                .build();

        clientRep.save(client);
        favoritRep.save(favorite);
        
        // Act & Assert
        Assertions.assertTrue(service.getListById(client.getId()));
    }
}