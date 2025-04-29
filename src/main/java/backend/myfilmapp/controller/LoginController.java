package backend.myfilmapp.controller;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.LoginResponse;
import org.springframework.web.bind.annotation.*;

import backend.myfilmapp.service.LoginService;

@RestController
@RequestMapping("/connection")
@CrossOrigin
public class LoginController {

    private final LoginService service;
    public LoginController(LoginService service) {
        this.service = service;
    }

    @PutMapping("/logout/{id}")
    public boolean Logout(@PathVariable int id) {
        return service.LogoutUser(id);
    }


    @PostMapping("/login")
    public LoginResponse Login(@RequestBody Client client) {
        return service.LoginUser(client);
    }

     @PostMapping("/signup")
     public LoginResponse SignIn(@RequestBody Client client) {
         return service.SignInUser(client);
     }
}
