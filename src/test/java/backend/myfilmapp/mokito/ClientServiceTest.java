package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import backend.myfilmapp.service.ClientService;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class ClientServiceTest {

    @InjectMocks
    private ClientService service;
    
    @Mock
    private ClientRep rep;

    @Test
    public void Rep_Save_ReturnBoolean() {
    	
    	Client client = new Client("testUser", "test@mail.com", "secret", LocalDateTime.now());
    	
    	when(rep.save(client)).thenReturn(client);
    	
    	Client savedClient = rep.save(client);
    	
    	Assertions.assertNotNull(savedClient);
        assertTrue(savedClient.getId() > 0);
    }
    
    @Test
    public void Rep_GetById_ReturnClient() {
    	
    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());
    	
    	when(rep.getClientById(client.getId())).thenReturn(client);
    	
    	Client returnedClient = rep.getClientById(client.getId());
    	
    	Assertions.assertNotNull(returnedClient);
        assertTrue(returnedClient.getId() > 0);
    }
    
    @Test
    public void Rep_GetByUsername_ReturnClient() {
    	
    	Client client = new Client("testUser3", "test@mail.com", "secret", LocalDateTime.now());
    	
    	when(rep.getClientByUsername("testUser3")).thenReturn(client);
    	
    	Client returnedClient = rep.getClientByUsername("testUser3");

    	Assertions.assertNotNull(returnedClient);
        assertTrue(returnedClient.getId() > 0);
    }
    
    @Test
    public void Rep_GetByEmail_ReturnClient() {
    	
    	Client client = new Client("testUser4", "tester@mail.com", "secret", LocalDateTime.now());
    	
    	when(rep.getClientByEmail("tester@mail.com")).thenReturn(client);
    	
    	Client returnedClient = rep.getClientByEmail("tester@mail.com");
    	
        Assertions.assertNotNull(returnedClient);
        assertTrue(returnedClient.getId() > 0);
    }
    
    @Test
    public void Service_Save_ReturnBoolean() {
    	
    	Client client = new Client("testUser5", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertTrue(service.saveClient(client));
    }
    
    @Test
    public void Service_Remove_ReturnVoid() {
    	
    	Client client = new Client("testUser6", "test@mail.com", "secret", LocalDateTime.now());
    	
    	service.removeClient("testUser6", "secret");
    	
    	verify(service).removeClient("testUser6", "secret");
    }
    
    @Test
    public void Service_UpdatePassword_ReturnBoolean() {
    	
    	Client client = new Client("testUser7", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertTrue(service.updateClientPassword("testUser7", "terces"));
    }
    
    @Test
    public void Service_UpdateClient_ReturnBoolean() {
    	
    	Client client = new Client("testUser8", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertTrue(service.updateClient("testUser8", "test@mail.com", "Super", "Man"));
    }
    
    @Test
    public void Service_GetOnlineStatus_ReturnBoolean() {
    	
    	Client client = new Client("testUser9", "test@mail.com", "secret", LocalDateTime.now());
    	
    	assertFalse(service.getOnlineStatus("testUser9"));
    }
    
    @Test
    public void Service_GetById_ReturnBoolean() {
    	
    	Client client = new Client("testUser10", "test@mail.com", "secret", LocalDateTime.now());
    	
    	when(service.getClientById(client.getId())).thenReturn(client);
    	
    	Client returnedClient = service.getClientById(client.getId());
    	
    	Assertions.assertNotNull(returnedClient);
        assertTrue(returnedClient.getId() > 0);
    }
}