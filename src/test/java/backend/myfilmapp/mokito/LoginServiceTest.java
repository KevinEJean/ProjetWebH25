package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.service.LoginService;
import backend.myfilmapp.models.LoginResponse;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class LoginServiceTest {

    @InjectMocks
    private LoginService Loginservice;

    @Test
    void LoginService_SignIn_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());

        LoginResponse response = Loginservice.SignInUser(client);
    	
    	assertNull(response); // car client n'est pas dans la bd donc retourne false
    }
    
    @Test
    void LoginService_Login_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());

    	LoginResponse response = Loginservice.LoginUser(client);

    	assertNull(response); // car client n'est pas dans la bd donc retourne null
    }
    
    @Test
    void LoginService_Logout_ReturnBoolean() {
    	
    	Client client = new Client("testUser3", "test@mail.com", "secret", LocalDateTime.now());

    	assertFalse(Loginservice.LogoutUser(client.getId())); // car client n'est pas dans la bd donc retourne false
    }
    
    @Test
    void LoginService_IsClientExist_ReturnBoolean() {
    	assertFalse(Loginservice.isClientExist("testUser4"));
    }
}
