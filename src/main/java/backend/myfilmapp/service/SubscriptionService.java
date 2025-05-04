package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;

@Service
public class SubscriptionService {

    // private final ClientRep rep;

    // public SubscriptionService(ClientRep rep) {
    //     this.rep = rep;
    // }

    // public Boolean getSubscriptionStatus(String username) {
    //     Client client = rep.getClientByUsername(username);
    //     return client.getSubscriptionStatus();
    // }

    // public void updateSubscriptionStatus(String username, Boolean status) {
    //     Client client = rep.getClientByUsername(username);
    //     client.setSubscriptionStatus(status);
    //     rep.save(client);
    // }
}
