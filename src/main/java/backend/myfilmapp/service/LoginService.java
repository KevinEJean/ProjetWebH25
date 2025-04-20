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

     public Client LoginHandler(String username) {
          Client client = rep.getClientByUsername(username);
          if (!client.isLoggedIn) {
               client.setLogedIn(true);
               return client.getId();
               
          } else {
               System.out.print("User already logged in !");
          }
          return null;
     }

     public Boolean LoginUser(String username, String password) {
         try {
             Client client = rep.getClientByUsername(username);
             if (client.getUsername().equals(username) && client.getPassword().equals(password)) {
                 return true;
             }
         } catch (Exception e) {
             System.out.print("Invalid credentials");
         }
         return false;
     }

     public String SignInUser(Client client) {
         try {
             Client clientError = rep.getClientByUsername(client.getUsername());
             if (clientError.getUsername().equals(client.getUsername())) {
                 return "Username '" + clientError.getUsername() + "' already taken. Try logging in?";
             }
         } catch (Exception e) { // si getClientByUsername return rien, le code catch s'exécute, donc un nouveau utilisateur peut être ajouté
             rep.save(client);
             return "New user created!";
         }
         return "Invalid credentials";
     }
}
