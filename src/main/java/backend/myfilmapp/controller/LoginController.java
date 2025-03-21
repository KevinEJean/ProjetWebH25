package backend.myfilmapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.myfilmapp.service.LoginService;

@RestController
@RequestMapping("/client/connection")
@CrossOrigin
public class LoginController {

    private final LoginService service;

    public LoginController(LoginService service) {
        this.service = service;
    }

    // @PostMapping("/login")
    // public Boolean Login(@RequestBody String username, String password) {
    //     return service.LoginUser(username, password);
    // }

    // @PostMapping
    // public String SignIn(@RequestBody String username, String email, String password) {
    //     service.SignInUser(username, email, password);
    //     return "New user saved";
    // }
}
