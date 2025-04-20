package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.repository.ClientRep;
import org.springframework.stereotype.Service;

@Service
public class SubscriptionService {

    private final ClientRep rep;

    public SubscriptionService(ClientRep rep) {
        this.rep = rep;
    }

    public Boolean getSubscriptionStatus(int id) {
        Client client = rep.getClientById(id);
        return client.getSubscriptionStatus();
    }
}
