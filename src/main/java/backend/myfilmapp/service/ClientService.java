package backend.myfilmapp.service;

import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;

@Service
public class ClientService {

    // permet de crypter les passwd des client
    // comme cela pas besoin de créer une table avec le passwd ce qui est trop fragile niveaux sécurité
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private final ClientRep rep;
    public ClientService(ClientRep rep) {
        this.rep = rep;
    }

    public String saveClient(Client client) {
        if (client.getUsername().contains("del-user") || client.getUsername().contains("admin")) { // pour empêcher erreur de login/signin
            return "Name not valid !";
        }

        // a voir si on peut utilise un regex(plus sûr)
        if (!client.getEmail().contains("@")){ return "Email not valid"; }

        client.setPassword(passwordEncoder.encode(client.getPassword()));
        rep.save(client);

        return "New client added!";
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

    public String updateClientFname(String username, String fname) {
        Client client = rep.getClientByUsername(username);
        if (client != null) {
            client.setFname(fname);
            rep.save(client);
            return "Fname have been update with succès";
        }
        return "Client not found";
    }

    public String updateClientLname(String username, String lname) {
        Client client = rep.getClientByUsername(username);
        if (client != null){
            client.setLname(lname);
            rep.save(client);
            return "Lname have been updated with succès";
        }
        return "Client not found";

    }

    public String updateClientEmail(String username, String email) {
        Client client = rep.getClientByUsername(username);
        if(client != null) {
            client.setEmail(email);
            rep.save(client);
            return "Email have been updated with succès!";
        }
        return "Client not found";
    }

    public String updateClientPassword(String username, String password, String passwordConfirm) {
        // à changer pour faire une confirmation de passwd avant de changer le changer
        Client client = rep.getClientByUsername(username);
        if (client != null) {
            if (passwordEncoder.matches(passwordConfirm, client.getPassword())) {
                client.setPassword(password);
                rep.save(client);
                return "Password have been updated with succès!";
            }
            return "Password incorrect! try again";
        }
        return "Client not found";
    }

    public Boolean getOnlineStatus(String username) {
        Client client = rep.getClientByUsername(username);
        return client.getOnlineStatus();
    }
}


