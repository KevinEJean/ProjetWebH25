package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.repository.ClientRep;
import backend.myfilmapp.repository.FavoriteListRep;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.TreeSet;

@Service
public class FavoriteListService {

    private final FavoriteListRep favoriteListRep;
    public ClientRep clientRep;

    public FavoriteListService(ClientRep clientRep, FavoriteListRep favoriteListRep) {
        this.favoriteListRep = favoriteListRep;
        this.clientRep = clientRep;
    }

    // ajouter une exception .orElse pour réduction du code
    // filtrer le movieApiId par client(ne peut avoir le même film dans la même list)
    public boolean addFavorite(int clientId, FavoriteList favorite) {
        Client client = clientRep.getClientById(clientId);
        if (client != null) {
            favorite.setClientId(client);
            favoriteListRep.save(favorite);
            return true;
        }
        return false;
    }

    public List<FavoriteList> getListById(int id) {
        return favoriteListRep.findByClientIdId(id);
    }

}
