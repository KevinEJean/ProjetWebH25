package backend.myfilmapp.repository;

import backend.myfilmapp.module.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRep extends JpaRepository<Client, Integer> {
    Client getClientById(int id);
    Client getClientByUsername(String username);
}
