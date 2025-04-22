package backend.myfilmapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;

@Service
public class ClientService {

    private final ClientRep rep;

    public ClientService(ClientRep rep) {
        this.rep = rep;
    }

    public void saveClient(Client client) {
        if (client.getUsername().contains("del-user") || client.getUsername().contains("admin")) { // pour empêcher erreur de login/signin
            System.console().printf("Name not valid !");
        } else {
            rep.save(client);
        }
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

    public void removeClient(String username) {
        Client client = rep.getClientByUsername(username);
        client.setActive(false);
        client.setUsername("del-user" + client.getId()); // change le nom pour empêcher erreur de login/signin
        rep.save(client);
    }

    public void updateClientFname(String username, String fname) {
        Client client = rep.getClientByUsername(username);
        client.setFname(fname);
        rep.save(client);
    }

    public void updateClientLname(String username, String lname) {
        Client client = rep.getClientByUsername(username);
        client.setLname(lname);
        rep.save(client);
    }

    public void updateClientEmail(String username, String email) {
        Client client = rep.getClientByUsername(username);
        client.setEmail(email);
        rep.save(client);
    }

    public void updateClientPassword(String username, String password) {
        Client client = rep.getClientByUsername(username);
        client.setPassword(password);
        rep.save(client);
    }

    public Boolean getOnlineStatus(String username) {
        Client client = rep.getClientByUsername(username);
        return client.getOnlineStatus();
    }
}
