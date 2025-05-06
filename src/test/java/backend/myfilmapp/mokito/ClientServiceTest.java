package backend.myfilmapp.mokito;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import backend.myfilmapp.service.ClientService;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
public class ClientServiceTest {

    @Mock
    private ClientRep clientRepository;

    @InjectMocks
    private ClientService clientService;
    
    @Test
    void Service_Get_ById_Return_Client() {

    	Client client = new Client("testUser2", "test@mail.com", "secret", LocalDateTime.now());
    	when(clientRepository.getClientById(client.getId())).thenReturn(client);

    	Client returnedClient = clientService.getClientById(client.getId());

        assertThat(returnedClient).isEqualTo(client);

    }

    @Test
    public void Service_removeClient_ReturnBoolean() {

    	Client client = new Client("testUser6", "test@mail.com", "secret", LocalDateTime.now());
        when(clientRepository.getClientByUsername(client.getUsername())).thenReturn(client);

        boolean isRemoveClient = clientService.removeClient("testUser6", "secret");

        assertTrue(isRemoveClient);
    }

    @Test
    void Service_updateClientPassword_ReturnBoolean() {

    	Client client = new Client("testUser7", "test@mail.com", "secret", LocalDateTime.now());
        when(clientRepository.getClientByUsername(client.getUsername())).thenReturn(client);

        Boolean isClientUpdatePassword = clientService.updateClientPassword(client.getUsername(), "test");

    	assertTrue(isClientUpdatePassword);
    }

    @Test
    void Service_getOnlineStatus_ReturnBoolean() {
        Client client = new Client("testUser7", "test@mail.com", "secret", LocalDateTime.now());
        when(clientRepository.getClientByUsername(client.getUsername())).thenReturn(client);

        boolean isClientOnline = clientService.getOnlineStatus(client.getUsername());

        assertFalse(isClientOnline);
    }
}