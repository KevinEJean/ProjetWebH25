package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.AutoWired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DatajpaTest;

@DataJpaTest
public class LoginServiceTest {

    @AutoWired
    private LoginService service;

    @AutoWired
    private ClientRep clientRep;

    @Test
    private void LoginService_SignIn_ReturnLoginResponse() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        Client savedClient = service.SignInUser(client);
        
        // Assert
        Assertions.assertTrue(savedClient.getOnlineStatus());
        Assertions.assertThat(savedClient.getId()).isGreaterThan(0);
    }

    @Test
    private void LoginService_Login_ReturnLoginResponse() {
        
        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .build();
        
        // Act
        Client savedClient = clientRep.save(client);
        Client savedClient = service.LoginUser(client);
        
        // Assert
        Assertions.assertTrue(savedClient.getOnlineStatus());
        Assertions.assertThat(savedClient.getId()).isGreaterThan(0);
    }

    @Test
    private void LoginService_Logout_ReturnBoolean() {

        // Arrange
        Client client = Client.builder()
                .username("testUser")
                .password("secret")
                .email("test@mail.com")
                .build();
        
        // Act
        Client savedClient = clientRep.save(client);
        Client loggedOutClient = service.LogoutUser(savedClient.getId());
        
        // Assert
        Assertions.assertFalse(loggedOutClient.getOnlineStatus());
        Assertions.assertThat(loggedOutClient.getId()).isGreaterThan(0);
    }
}