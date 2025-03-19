package backend.myfilmapp.controller;

import backend.myfilmapp.module.Client;
import backend.myfilmapp.service.ClientService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/remove")
    public String remove(@RequestBody Client client) { // arguments must be String username & String password (easier to getMapping)
        client.setActive(false);
        return "Client removed!";
    }

    @GetMapping("/getAll")
    public List<Client> getAll() {
        return service.getAllClient();
    }

    @GetMapping("/byId")
    public Client byId(@RequestBody int id) {
        return service.getClientById(id);
    }
}
