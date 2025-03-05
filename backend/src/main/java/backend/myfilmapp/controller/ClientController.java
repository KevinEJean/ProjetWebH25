package backend.myfilmapp.controller;

import backend.myfilmapp.module.Client;
import backend.myfilmapp.service.ClientService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

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
    public Client byUsername(@RequestBody int id) {
        return service.getClientById(id);
    }

    @GetMapping("/byUsername")
    public Client byUsername(@RequestBody String username) {
        return service.getClientByUsername(username);
    }
}
