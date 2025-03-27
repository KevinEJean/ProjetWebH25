package backend.myfilmapp.controller;

import org.springframework.web.bind.annotation.*;

import backend.myfilmapp.service.LoginService;

@RestController
@RequestMapping("/client/connection")
@CrossOrigin
public class LoginController {

    private final LoginService service;

    public LoginController(LoginService service) {
        this.service = service;
    }

    @PostMapping("/logout")
    public String LogOut() {
        service.LogOut();
        return "Logged out. Bye!";
    }


    // ========================= ADD @PathVariable =========================



     @PostMapping("/login")
     public Boolean Login(@RequestBody String username, @RequestBody String password) {
         return service.LoginUser(username, password);
     }

     @PostMapping("/signin")
     public String SignIn(@RequestBody String username, @RequestBody String email, @RequestBody String password) {
         service.SignInUser(username, email, password);
         return "New user saved";
     }
}
