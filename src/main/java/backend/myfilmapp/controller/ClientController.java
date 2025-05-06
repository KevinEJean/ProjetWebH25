package backend.myfilmapp.controller;

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


    @PutMapping("/remove/{username}/{password}")
    public boolean remove(@PathVariable String username, @PathVariable String password) {
        return service.removeClient(username, password);
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
