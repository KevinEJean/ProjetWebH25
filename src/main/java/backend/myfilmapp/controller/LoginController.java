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

    // à remplacer pour requestBody après la fin de nos test
    @PutMapping("/logout/{username}")
    public void Logout(@PathVariable String username) {
        service.LogoutUser(username);
    }

    // à remplacer pour requestBody après la fin de nos test
     @PutMapping("/login/{username}/{password}")
     public Boolean Login(@PathVariable String username, @PathVariable String password) {
         return service.LoginUser(username, password);
     }

     @PostMapping("/signup")
     public String SignIn(@RequestBody Client client) {
         return service.SignInUser(client);
     }
}
