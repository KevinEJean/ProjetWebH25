package filmapp.backend.rep;

import filmapp.backend.module.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRep extends JpaRepository<User, Integer> {

    User removeUsersById(int id);

    // FILTRE DE RECHERCHE POUR USER
    User getUserById(int id);
    User getUserByUsername(String username);
    User getUserByEmail(String email);
}