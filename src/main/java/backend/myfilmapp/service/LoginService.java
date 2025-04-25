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

     public int LoginUser(String username, String password) {
         try {
             Client client = rep.getClientByUsername(username);
             if (client.getUsername().equals(username) && client.getPassword().equals(password)) {
                  client.setOnlineStatus(true);
                  rep.save(client);
                 return client.getId();
             }
         } catch (Exception e) {
             System.out.print("Invalid credentials");
         }
         return -1;
     }

     public String SignInUser(Client client) {
         try {
             Client clientError = rep.getClientByUsername(client.getUsername());
             if (clientError.getUsername().equals(client.getUsername())) {
                 return "Username '" + clientError.getUsername() + "' already taken. Try logging in?";
             }
         } catch (Exception e) { // si getClientByUsername retourne rien, le code catch s'exécute, donc un nouveau utilisateur peut être ajouté
             rep.save(client);
             return "New user created!";
         }
         return "Invalid credentials";
     }
}
