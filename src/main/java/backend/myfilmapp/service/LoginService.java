package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.LoginResponse;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

     private final ClientRep rep;
     public LoginService(ClientRep rep) {
         this.rep = rep;
     }

     public boolean LogoutUser(int id) {
         Client client = rep.getClientById(id);
         if (client != null) {
             client.setOnlineStatus(false);
             rep.save(client);
             return true;
         }
         return false;
     }

    public LoginResponse LoginUser(Client clientRequest) {
        try {
            Client clientInDb = rep.getClientByUsername(clientRequest.getUsername());
            if (clientInDb != null && clientInDb.getPassword().equals(clientRequest.getPassword()) && clientInDb.isActive()) {
                clientInDb.setOnlineStatus(true);
                rep.save(clientInDb);
                return new LoginResponse(clientInDb.getId(), clientInDb.getUsername(), clientInDb.getOnlineStatus());
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }


     public LoginResponse SignInUser(Client client) {
         Client thisClient = rep.getClientByUsername(client.getUsername());
         if (thisClient == null && client.isActive() && !client.getOnlineStatus()) {
             client.setOnlineStatus(true);
             rep.save(client);
             return new LoginResponse(client.getId(), client.getUsername(), client.getOnlineStatus());
         }
         return null;
     }

    public boolean isClientExist(String username) {
        Client client = rep.getClientByUsername(username);
        return client != null;
    }
}
