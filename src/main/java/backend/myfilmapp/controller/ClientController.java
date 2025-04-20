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
        service.saveClient(user);
        return "New client added!";
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

    @GetMapping("/getOnlineStatus/{id}")
    public Boolean getOnlineStatus(@PathVariable int id) {
        return service.getOnlineStatus(id);
    }

    @PutMapping("/remove/{username}")
    public String remove(@PathVariable String username) {
        service.removeClient(username);
        return "Client removed!";
    }

    @PutMapping("/updateFname/{username}/{fname}")
    public String updateFname(@PathVariable String username, @PathVariable String fname) {
        service.updateClientFname(username, fname);
        return "New first name saved!";
    }

    @PutMapping("/updateLname/{username}/{lname}")
    public String updateLname(@PathVariable String username, @PathVariable String lname) {
        service.updateClientLname(username, lname);
        return "New last name saved!";
    }

    @PutMapping("/updateEmail/{username}/{email}")
    public String updateEmail(@PathVariable String username, @PathVariable String email) {
        service.updateClientEmail(username, email);
        return "New email saved!";
    }

    @PutMapping("/updatePassword/{username}/{password}")
    public String updatePassword(@PathVariable String username, @PathVariable String password) {
        service.updateClientPassword(username, password);
        return "New password saved!";
    }
}