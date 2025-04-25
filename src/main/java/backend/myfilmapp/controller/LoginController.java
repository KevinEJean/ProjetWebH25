package backend.myfilmapp.controller;

import backend.myfilmapp.models.Client;
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

    @PutMapping("/logout/{username}")
    public void Logout(@PathVariable String username) {
        service.LogoutUser(username);
    }

     @GetMapping("/login/{username}/{password}")
     public Boolean Login(@PathVariable String username, @PathVariable String password) {
         return service.LoginUser(username, password);
     }

     @PostMapping("/signup")
     public String SignIn(@RequestBody Client client) {
         return service.SignInUser(client);
     }
}
