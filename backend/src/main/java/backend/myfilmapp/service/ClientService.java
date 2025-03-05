package backend.myfilmapp.service;

import backend.myfilmapp.module.Client;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private ClientRep rep;

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
}
