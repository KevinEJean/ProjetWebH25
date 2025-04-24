package backend.myfilmapp.controller;

import backend.myfilmapp.service.ClientService;
import backend.myfilmapp.service.LoginService;
import backend.myfilmapp.service.SubscriptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/subscription")
@CrossOrigin
public class SubscriptionController {

    private final SubscriptionService service;

    public SubscriptionController(SubscriptionService service) {
        this.service = service;
    }

    @GetMapping("/getStatus/{username}")
    public Boolean getStatus(@PathVariable String username) {
        return service.getSubscriptionStatus(username);
    }
}
