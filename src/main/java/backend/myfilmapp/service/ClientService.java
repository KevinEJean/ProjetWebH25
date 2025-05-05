package backend.myfilmapp.service;

import java.util.List;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;

@Service
public class ClientService {

//    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private final ClientRep rep;
    public ClientService(ClientRep rep) {
        this.rep = rep;
    }

    public boolean saveClient(Client client) {
        if (client.getUsername().contains("del-user") || client.getUsername().contains("admin")) { // pour empêcher erreur de login/signin
            return false;
        } else {
            rep.save(client);
            return true;
        }
    }

    public void removeClient(String username, String password) {
        Client client = rep.getClientByUsername(username);
        if (client.getPassword().equals(password)) {
            client.setActive(false);
            client.setUsername("del-user" + client.getId()); // change le nom pour empêcher erreur de login/signin
            rep.save(client);
        }
    }

    public Boolean updateClientPassword(String username, String newPassword) {
        // à changer pour faire une confirmation de passwd avant de changer le changer
        Client client = rep.getClientByUsername(username);
        if (client != null) {
            client.setPassword(newPassword);
            rep.save(client);
            return true;
        }
        return false;
    }

    public Boolean updateClient(String username, String email, String fname, String lname) {
        Client client = rep.getClientByUsername(username);
        if (client != null) {
            client.setEmail(email);
            client.setFname(fname);
            client.setLname(lname);
            rep.save(client);
            return true;
        }
        return false;
    }

    public Boolean getOnlineStatus(String username) {
        Client client = rep.getClientByUsername(username);
        return client.getOnlineStatus();
    }

    public List<Client> getAllClient() {
        return rep.findAll();
    }

    public Client getClientById(int id) {
        return rep.getClientById(id);
    }

    public Client getClientByUsername(String username) {
        return rep.getClientByUsername(username);
    }

    public Client getClientByEmail(String email) {
        return rep.getClientByEmail(email);
    }
}


