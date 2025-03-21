package backend.myfilmapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import backend.myfilmapp.module.Client;
import backend.myfilmapp.repository.ClientRep;

@Service
public class ClientService {

    private final ClientRep rep;

    public ClientService(ClientRep rep) {
        this.rep = rep;
    }

    public void saveClient(Client client) {
        rep.save(client);
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

    // public void updateClientPassword(String username, String password) {
    //     Client client = rep.getClientByUsername(username);
    //     client.setPasswd(password);
    // }

//    public void updateClientFname(String username, String fname) {
//        Client client = rep.getClientByUsername(username);
//        client.setFname(fname);
//    }

//    public void updateClientLname(String username, String lname) {
//        Client client = rep.getClientByUsername(username);
//        client.setLname(lname);
//    }

    // public void resetPassword(String email, String newPassword) {
    //     Client client = rep.getClientByEmail(email);
    //     client.setPasswd(newPassword);
    // }
}
