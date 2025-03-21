package backend.myfilmapp.service;

import org.springframework.stereotype.Service;

@Service
public class LoginService {

    // private final ClientRep rep;

    // public LoginService(ClientRep rep) {
    //     this.rep = rep;
    // }

    // public Boolean LoginUser(String username, String password) {
    //     Client client = rep.getClientByUsername(username);
    //     if (username == client.getUsername() && password == client.getPasswd()) {
    //         return true;
    //     }
    //     return false;
    // }

    // public void SignInUser(String username, String email, String password) {
    //     try {
    //         Client clientErrorCatcher = rep.getClientByUsername(username);
    //         if (clientErrorCatcher.getUsername() != "" || clientErrorCatcher.getUsername() != null) {
    //             Client newClient = new Client(0, username, email, password);
    //             rep.save(newClient);
    //         }
    //     } catch (Exception e) {
    //         System.out.println("Username already taken! Try logging in?");
    //     }
    // }
}
