package backend.myfilmapp.controller;

import backend.myfilmapp.service.SubscriptionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscription")
@CrossOrigin
public class SubscriptionController {

    // private final SubscriptionService service;

    // public SubscriptionController(SubscriptionService service) {
    //     this.service = service;
    // }

    // @GetMapping("/getStatus/{username}")
    // public Boolean getStatus(@PathVariable String username) {
    //     return service.getSubscriptionStatus(username);
    // }

    // @PutMapping("/updateStatus/{username}/{status}")
    // public void updateStatus(@PathVariable String username, @PathVariable Boolean status) {
    //     service.updateSubscriptionStatus(username, status);
    // }
}
