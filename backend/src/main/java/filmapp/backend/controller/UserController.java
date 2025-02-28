package filmapp.backend.controller;

import filmapp.backend.module.User;
import filmapp.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userServiceImpl;

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        userServiceImpl.saveUser(user);
        return "New user added!";
    }

    @DeleteMapping("/remove")
    public String remove(@RequestBody int id) {
        userServiceImpl.removeById(id);
        return "User ("+id+") has been removed!";
    }

    @GetMapping("/getAll")
    public List<User> getAll() {
        return userServiceImpl.getAllUser();
    };

    @GetMapping("/getById")
    public User getById(@RequestBody int id) {
        return userServiceImpl.getById(id);
    }

    @GetMapping("/getByUsername")
    public User getByUsername(@RequestBody String username) {
        return userServiceImpl.getByUsername(username);
    }

    @GetMapping("/getByEmail")
    public User getByEmail(@RequestBody String email) {
        return userServiceImpl.getByEmail(email);
    };
}
