package backend.myfilmapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

//    @PostMapping("/remove")
//    public String remove(@RequestBody Client client) {
//        client.setActive(false);
//        return "Client removed!";
//    }

    @GetMapping("/getAll")
    public List<Client> getAll() {
        return service.getAllClient();
    }

    @GetMapping("/byId")
    public Client byId(@RequestBody int id) {
        return service.getClientById(id);
    }

    @GetMapping("/byUsername")
    public Client byUsername(@RequestBody String username) {
        return service.getClientByUsername(username);
    }

    @GetMapping("/byEmail")
    public Client byEmail(@RequestBody String email) {
        return service.getClientByEmail(email);
    }

    // @PostMapping("/updatePassword")
    // public String updatePassword(@RequestBody String username, String passwd) {
    //     service.updateClientPassword(username, passwd);
    //     return "New password saved!";
    // }

//    @PostMapping("/updateFname")
//    public String updateFname(@RequestBody String username, String fname) {
//        service.updateClientFname(username, fname);
//        return "New first name saved!";
//    }

//    @PostMapping("/updateLname")
//    public String updateLname(@RequestBody String username, String lname) {
//        service.updateClientLname(username, lname);
//        return "New password saved!";
//    }

    // @PostMapping("/resetPassword")
    // public String resetPassword(@RequestBody String email, String newPassword) {
    //     service.resetPassword(email, newPassword);
    //     return "New password has been reset!";
    // }
}
