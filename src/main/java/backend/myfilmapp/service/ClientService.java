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
        try {
            Client client = rep.getClientByUsername(username);
            if (client.getPassword().equals(password)) {
                client.setActive(false);
                client.setUsername("del-user" + client.getId()); // change le nom pour empêcher erreur de login/signin
                rep.save(client);
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;
    }

    public Boolean updateClientPassword(String username, String newPassword) {
        try {
            Client client = rep.getClientByUsername(username);
            if (client != null) {
                client.setPassword(newPassword);
                rep.save(client);
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;
    }

    public Boolean getOnlineStatus(String username) {
        try {
            Client client = rep.getClientByUsername(username);
            return client.getOnlineStatus();
        }  catch (Exception e) {
            return false;
        }
    }

    public Client getClientById(int id) {
        try {
            return rep.getClientById(id);
        } catch (Exception e) {
            return null;
        }
    }
}


