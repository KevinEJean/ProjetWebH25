package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.repository.FavoriteListRep;
import org.springframework.stereotype.Service;

@Service
public class FavoriteListService {

    private final FavoriteListRep rep;
    public FavoriteListService(FavoriteListRep rep) {
        this.rep = rep;
    }

//    public void saveList(List<String> list) {
//        rep.save(list);
//    }

    public FavoriteList getListById(int id) {
        return rep.getFavoriteListById(id);
    }

//    public FavoriteList getListByClientId(int clientId) {
//        return rep.getFavoriteListByClientId(clientId);
//    }
}
