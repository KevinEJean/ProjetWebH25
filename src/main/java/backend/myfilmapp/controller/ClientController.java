package backend.myfilmapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import backend.myfilmapp.module.Client;
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

    @GetMapping("/byId")
    public Client byId(@RequestBody int id) {
        return service.getClientById(id);
    }

    @GetMapping("/getByUsername")
    public Client byUsername(@RequestBody String username) {
        return service.getClientByUsername(username);
    }

    @GetMapping("/getByEmail")
    public Client byEmail(@RequestBody String email) {
        return service.getClientByEmail(email);
    }

    @PutMapping("/remove")
    public String remove(@RequestBody String username) {
        service.removeClient(username);
        return "Client removed!";
    }




    // ========================= FIX THE @PathVariable =========================





    @PutMapping("/updateFname/{username}")
    public String updateFname(@PathVariable String username, @RequestBody String fname) {
        service.updateClientFname(username, fname);
        return "New first name saved!";
    }

    @PutMapping("/updateLname/{username}")
    public String updateLname(@PathVariable String username, @RequestBody String lname) {
        service.updateClientLname(username, lname);
        return "New last name saved!";
    }

    @PutMapping("/updateEmail/{username}")
    public String updateEmail(@PathVariable String username, @RequestBody String email) {
        service.updateClientEmail(username, email);
        return "New email saved!";
    }

    @PutMapping("/updatePassword/{username}")
    public String updatePassword(@RequestBody String username, @RequestBody String password) {
        service.updateClientPassword(username, password);
        return "New password saved!";
    }
}