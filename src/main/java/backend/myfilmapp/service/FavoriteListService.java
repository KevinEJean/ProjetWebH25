package backend.myfilmapp.service;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.repository.ClientRep;
import backend.myfilmapp.repository.FavoriteListRep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteListService {

    private final FavoriteListRep favoriteListRep;
    public ClientRep clientRep;

    public FavoriteListService(ClientRep clientRep, FavoriteListRep favoriteListRep) {
        this.favoriteListRep = favoriteListRep;
        this.clientRep = clientRep;
    }

    public boolean addFavorite(int clientId, FavoriteList favorite) {
        Client client = clientRep.getClientById(clientId);
        if (client != null) {
            favorite.setClientId(client);
            if (!isFavorite((client.getId()), favorite.getMovieApiId())) {
                favoriteListRep.save(favorite);
                return true;
            }
            return true;
        }
        return false;
    }

    public boolean deleteFavorite(int clientId, int movieApiID) {
        if (isFavorite(clientId, movieApiID)) {
            Client client = clientRep.getClientById(clientId);
            FavoriteList favoriteList = favoriteListRep.findByClientIdAndMovieApiId(client, movieApiID);
            favoriteListRep.delete(favoriteList);
            return true;
        }
        return false;
    }

    public boolean isFavorite(int clientId, int movieApiId) {
        Client client = clientRep.getClientById(clientId);
        FavoriteList favoriteList = favoriteListRep.findByClientIdAndMovieApiId(client, movieApiId);
        return favoriteList != null;
    }

    public List<FavoriteList> getListById(int id) {
        return favoriteListRep.findByClientIdId(id);
    }

}
