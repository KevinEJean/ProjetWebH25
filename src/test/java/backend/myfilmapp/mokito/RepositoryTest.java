package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.AutoWired;
import org.springframework.boot.jdbc.EmbededDataBaseConnection;
import org.springframework.boot.test.autoconfigure.orm.jpa.DatajpaTest;

@DataJpaTest
public class RepositoryTest {

    @AutoWired
    private ClientRep clientRep;

    @Test 
    public void ClientRep_Save_ReturnVoid() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        Client savedClient = clientRep.save(client);
        
        // Assert
        Assertions.assertThat(savedClient).isNotNull();
        Assertions.assertThat(savedClient.getId()).isGreaterThan(0);
    }





    @Test 
    public void ClientRep_GetById_ReturnClient() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        clientRep.save(client);
        Client savedClientId = clientRep.getClientById(1);
        
        // Assert
        Assertions.assertThat(savedClientId).isNotNull();
        Assertions.assertEquals(1, savedClientId.getId());
    }






    @Test 
    public void ClientRep_GetByUsername_ReturnClient() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        clientRep.save(client);
        Client savedClientUsername = clientRep.getClientByUsername("testUser");

        // Assert
        Assertions.assertThat(savedClientUsername).isNotNull();
        Assertions.assertEquals("testUser", savedClientUsername.getClientByUsername());
    }






    @Test 
    public void ClientRep_GetByEmail_ReturnClient() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        clientRep.save(client);
        Client savedClientEmail = clientRep.getClientByEmail("test@mail.com");
        
        // Assert
        Assertions.assertThat(savedClientEmail).isNotNull();
        Assertions.assertEquals("test@mail.com", savedClientEmail.getEmail());
    }






    /* ##################### FAVORIT_LIST_REP ##################### */



    @AutoWired
    private FavoriteListRep favoritRep;

    @Test 
    public void FavoriteListRep_Save_ReturnVoid() {

        // Arrange
        FavoriteList favorite = FavoriteList.builder()
                .movieApiId(200)
                .clientId(client.getId())
                .build();

        favoritRep.save(favorite);
        
        // Act & Assert
        Assertions.assertThat(favorite).isNotNull();
    }




    @Test 
    public void FavoriteListRep_GetByClientId_ReturnFavoritList() {

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
        Assertions.assertThat(favoritRep.findByClientIdId(client.getId())).isNotNull();
    }




    @Test 
    public void FavoriteListRep_GetByMovieApiId_ReturnFavoritList() {

        // Arrange
        FavoriteList favorite = FavoriteList.builder()
                .movieApiId(200)
                .clientId(client.getId())
                .build();

        favoritRep.save(favorite);
        
        // Act & Assert
        Assertions.assertThat(favoritRep.findByMovieApiId(200)).isNotNull();
    }




    @Test 
    public void FavoriteListRep_GetByClientId_And_ByMovieApiId_ReturnFavoritList() {

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
        Assertions.assertTrue(favoritRep.findByClientIdAndMovieApiId(client.getId(), 200));
    }
}