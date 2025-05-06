package backend.myfilmapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.service.ClientService;

@RestController
@RequestMapping("/client")
@CrossOrigin
public class ClientController {

    private final ClientService service;

    public ClientController(ClientService service) {
        this.service = service;
    }



    /*######## UTLISÉ DANS LE FRONTEND ########*/

    // a définir le retour en bool pour get le retour dans le response
    @PutMapping("/remove/{username}/{password}")
    public String remove(@PathVariable String username, @PathVariable String password) {
        service.removeClient(username, password);
        return "Client removed!";
    }

    @PutMapping("/update/{username}/{email}/{fname}/{lname}")
    public Boolean update(@PathVariable String username, @PathVariable String email, @PathVariable String fname, @PathVariable String lname) {
        return service.updateClient(username, email, fname, lname);
    }

    @PutMapping("/updatePassword/{username}/{newPassword}")
    public Boolean updatePassword(@PathVariable String username, @PathVariable String newPassword) {
        return service.updateClientPassword(username, newPassword);
    }

    @GetMapping("/getOnlineStatus/{username}")
    public Boolean getOnlineStatus(@PathVariable String username) {
        return service.getOnlineStatus(username);
    }

    @GetMapping("/getById/{id}")
    public Client byId(@PathVariable int id) {
        return service.getClientById(id);
    }
}
