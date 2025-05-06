package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.service.ClientService;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class ClientServiceTest {

    @InjectMocks
    private ClientService clientService;
    
    @Test
    void Service_GetById_Return_Client() {

    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());

        Client returnedClient = clientService.getClientById(client.getId());

        assertNull(returnedClient);

    }

    @Test
    public void Service_removeClient_ReturnBoolean() {

    	Client client = new Client("testUser6", "test@mail.com", "secret", LocalDateTime.now());

        boolean isRemoveClient = clientService.removeClient("testUser6", "secret");

        assertFalse(isRemoveClient);
    }

    @Test
    void Service_updateClientPassword_ReturnBoolean() {

    	Client client = new Client("testUser7", "test@mail.com", "secret", LocalDateTime.now());

        Boolean isClientUpdatePassword = clientService.updateClientPassword(client.getUsername(), "test");

    	assertFalse(isClientUpdatePassword);
    }

    @Test
    void Service_getOnlineStatus_ReturnBoolean() {

        Client client = new Client("testUser8", "test@mail.com", "secret", LocalDateTime.now());

        boolean isClientOnline = clientService.getOnlineStatus(client.getUsername());

        assertFalse(isClientOnline);
    }
}