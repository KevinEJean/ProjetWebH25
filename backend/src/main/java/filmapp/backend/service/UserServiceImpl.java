package filmapp.backend.service;

import filmapp.backend.module.User;
import filmapp.backend.rep.UserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private List<User> userList;

    @Autowired
    private UserRep userRep;

    @Override
    public User saveUser(User user) {
        return userRep.save(user);
    }

    @Override
    public User removeById(int id) {
        return userRep.removeUsersById(id);
    }

    @Override
    public List<User> getAllUser() {
        return userList;
    }

    @Override
    public User getById(int id) {
        return userRep.getUserById(id);
    }

    @Override
    public User getByUsername(String username) {
        return userRep.getUserByUsername(username);
    }

    @Override
    public User getByEmail(String email) {
        return userRep.getUserByEmail(email);
    }
}
