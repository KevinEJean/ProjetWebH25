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

    @PostMapping("/add")
    public String add(@RequestBody Client user) {
        return service.saveClient(user);
//        return "New client added!";
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

    @GetMapping("/getOnlineStatus/{username}")
    public Boolean getOnlineStatus(@PathVariable String username) {
        return service.getOnlineStatus(username);
    }

    @PutMapping("/remove/{username}")
    public String remove(@PathVariable String username) {
        service.removeClient(username);
        return "Client removed!";
    }

    @PutMapping("/updateFname/{username}/{fname}")
    public String updateFname(@PathVariable String username, @PathVariable String fname) {
        return service.updateClientFname(username, fname);
    }

    @PutMapping("/updateLname/{username}/{lname}")
    public String updateLname(@PathVariable String username, @PathVariable String lname) {
        return service.updateClientLname(username, lname);
    }

    @PutMapping("/updateEmail/{username}/{email}")
    public String updateEmail(@PathVariable String username, @PathVariable String email) {
        return service.updateClientEmail(username, email);
    }

    @PutMapping("/updatePassword/{username}/{password}")
    public String updatePassword(@PathVariable String username, @PathVariable String passwordConfirm, @PathVariable String password) {
        return service.updateClientPassword(username, passwordConfirm, password);
    }
}