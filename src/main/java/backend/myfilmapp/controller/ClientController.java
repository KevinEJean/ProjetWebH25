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

    @PutMapping("/updatePassword/{username}/{password}")
    public Boolean updatePassword(@PathVariable String username, @PathVariable String password) {
        return service.updateClientPassword(username, password);
    }

    @GetMapping("/getOnlineStatus/{username}")
    public Boolean getOnlineStatus(@PathVariable String username) {
        return service.getOnlineStatus(username);
    }



    /*######## POUR TEST ########*/

    @PostMapping("/add")
    public boolean add(@RequestBody Client user) {
        return service.saveClient(user);
    }

    @GetMapping("/getAll")
    public List<Client> getAll() {
        return service.getAllClient();
    }

    @GetMapping("/getById/{id}")
    public Client byId(@PathVariable int id) {
        return service.getClientById(id);
    }

    @GetMapping("/getByUsername/{username}")
    public Client byUsername(@PathVariable String username) {
        return service.getClientByUsername(username);
    }

    @GetMapping("/getByEmail/{email}")
    public Client byEmail(@PathVariable String email) {
        return service.getClientByEmail(email);
    }
}
