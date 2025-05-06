package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import backend.myfilmapp.service.LoginService;
import backend.myfilmapp.models.LoginResponse;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class LoginServiceTest {

    @Mock
    private ClientRep clientRepository;

    @InjectMocks
    private LoginService Loginservice;

    @Test
    void LoginService_SignIn_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());

        LoginResponse response = Loginservice.SignInUser(client);
    	
    	assertTrue(response.getUsernameResponse().equals("testUser"));
    }
    
    @Test
    void LoginService_Login_ReturnLoginResponse() {
    	
    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());
    	
    	LoginResponse response = Loginservice.LoginUser(client);
    	
    	assertTrue(response.getUsernameResponse().equals("testUser"));
    }
    
    @Test
    void LoginService_Logout_ReturnBoolean() {
    	
    	Client client = new Client("testUser3", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertTrue(Loginservice.LogoutUser(client.getId()));
    }
    
    @Test
    void LoginService_IsClientExist_ReturnBoolean() {
    	assertFalse(Loginservice.isClientExist("testUser4"));
    }
}