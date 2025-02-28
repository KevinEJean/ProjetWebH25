package filmapp.backend.service;

import filmapp.backend.module.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public User removeById(int id);

    // FILTRE DE RECHERCHE POUR USER
    public List<User> getAllUser();
    public User getById(int id);
    public User getByUsername(String username);
    public User getByEmail(String email);
}
