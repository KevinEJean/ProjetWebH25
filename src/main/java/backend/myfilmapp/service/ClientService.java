package backend.myfilmapp.service;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;

@Service
public class ClientService {

    private final ClientRep rep;
    public ClientService(ClientRep rep) {
        this.rep = rep;
    }

    public boolean removeClient(String username, String password) {
        Client client = rep.getClientByUsername(username);
        if (client.getPassword().equals(password)) {
            client.setActive(false);
            client.setUsername("del-user" + client.getId()); // change le nom pour empêcher erreur de login/signin
            rep.save(client);
            return true;
        }
        return false;
    }

    public Boolean updateClientPassword(String username, String newPassword) {
        Client client = rep.getClientByUsername(username);
        if (client != null) {
            client.setPassword(newPassword);
            rep.save(client);
            return true;
        }
        return false;
    }

    public Boolean getOnlineStatus(String username) {
        Client client = rep.getClientByUsername(username);
        return client.getOnlineStatus();
    }

    public Client getClientById(int id) {
        return rep.getClientById(id);
    }
}


