package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.AutoWired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DatajpaTest;

@DataJpaTest
public class ClienServiceTest {

    @AutoWired
    private ClienService service;

    @Test
    public void ClientService_Save_ReturnBoolean() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act & Assert
        Assertions.assertTrue(service.save(client));
    }

    @Test
    public void ClientService_Remove_ReturnVoid() {
        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        // Act & Assert
        Client deactivatedClient = service.removeClient("testUser", "secret");
        Assertions.assertTrue(deactivatedClient.getUsername().contains("del-user"));
        Assertions.assertFalse(deactivatedClient.isActive());
    }

    @Test
    public void ClientService_UpdatePassword_ReturnBoolean() {
        
        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        // Act & Assert
        Assertions.assertTrue(service.updateClientPassword("testUser", "qwertyu"));
    }

    @Test
    public void ClientService_Update_ReturnBoolean() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();

        // Act
        Client savedClient = service.updateClient("testUser", "mockedData@mail.com", "Test", "Mokito");

        // Assert
        Assertions.assertEquals("mockedData@mail.com", savedClient.getEmail());
        Assertions.assertEquals("Test", savedClient.getFname());
        Assertions.assertEquals("Mokito", savedClient.getLname());
    }

    @Test
    public void ClientService_GetOnlineStatus_ReturnBoolean() {
            
        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .getOnlineStatus(true)
                .build();

        // Act & Assert
        Assertions.assertTrue(service.getOnlineStatus("testUser"));
    }
}