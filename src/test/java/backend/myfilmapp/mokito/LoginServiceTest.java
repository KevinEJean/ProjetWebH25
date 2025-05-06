package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.service.LoginService;
import backend.myfilmapp.models.LoginResponse;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class LoginServiceTest {

    @InjectMocks
    private LoginService service;

    @Test
    private void LoginService_SignIn_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	
    	LoginResponse response = service.SignInUser(client);
    	
    	assertTrue(response.getUsernameResponse().equals("testUser"));
    }
    
    @Test
    private void LoginService_Login_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());
    	
    	LoginResponse response = service.LoginUser(client);
    	
    	assertTrue(response.getUsernameResponse().equals("testUser"));
    }
    
    @Test
    private void LoginService_Logout_ReturnBoolean() {
    	
    	Client client = new Client("testUser3", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertTrue(service.LogoutUser(client.getId()));
    }
    
    @Test
    private void LoginService_IsClientExist_ReturnBoolean() {
    	assertFalse(service.isClientExist("testUser4"));
    }
}