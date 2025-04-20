package backend.myfilmapp.controller;

import backend.myfilmapp.service.ClientService;
import backend.myfilmapp.service.LoginService;
import backend.myfilmapp.service.SubscriptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class SubscriptionController {

    private final SubscriptionService service;

    public SubscriptionController(SubscriptionService service) {
        this.service = service;
    }

    @GetMapping("/getSubscriptionStatus/{id}")
    public Boolean getSubscriptionStatus(@PathVariable int id) {
        return service.getSubscriptionStatus(id);
    }
}
