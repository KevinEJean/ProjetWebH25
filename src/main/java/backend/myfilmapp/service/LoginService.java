package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

     private final ClientRep rep;
     public LoginService(ClientRep rep) {
         this.rep = rep;
     }


     public void LogoutUser(String username) {
         Client client = rep.getClientByUsername(username);
         client.setOnlineStatus(false);
         rep.save(client);
     }

     public Boolean LoginUser(String username, String password) {
         try {
             Client client = rep.getClientByUsername(username);
             if (client.getUsername().equals(username) && client.getPassword().equals(password) && client.isActive() == true && client.getOnlineStatus() == false) {
                  client.setOnlineStatus(true);
                  rep.save(client);
                 return true;
             }
         } catch (Exception e) {}
         return false;
     }

     public String SignInUser(Client client) {
         Client thisClient = rep.getClientByUsername(client.getUsername());
         if (thisClient == null) {
             rep.save(client);
             return "New user created!";
         }
         return "Username unavailable!";
     }
}
