package backend.myfilmapp.service;

import backend.myfilmapp.module.Client;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

@Service
public class LoginService {

     private final ClientRep rep;

     public LoginService(ClientRep rep) {
         this.rep = rep;
     }

     public void LogOut() {
         LoginUser("logout", "logout");
     }

     public Boolean LoginUser(String username, String password) {
         try {
             Client client = rep.getClientByUsername(username);
             if (client.getUsername() == username && client.getPassword() == password) {
                 return true;
             } else if (username == "logout" || password == "logout") {
                 return false;
             }
         } catch (Exception e) {
             System.out.printf("Invalid credentials");
         }
         return false;
     }

     public void SignInUser(String username, String email, String password) {
         try {
             Client client = rep.getClientByUsername(username);
             if (client.getUsername() == username) {
                 System.console().printf("Username already taken. Try logging in?");
             } else {
                 Client newClient = new Client(username, email, password);
                 rep.save(newClient);
             }
         } catch (Exception e) {
             System.out.printf("Invalid credentials");
         }
     }
}
