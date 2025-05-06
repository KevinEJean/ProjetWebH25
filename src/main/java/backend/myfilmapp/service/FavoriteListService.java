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
    private final ClientRep clientRep;

    public FavoriteListService(ClientRep clientRep, FavoriteListRep favoriteListRep) {
        this.favoriteListRep = favoriteListRep;
        this.clientRep = clientRep;
    }

    public boolean addFavorite(int clientId, FavoriteList favorite) {
        try {
            Client client = clientRep.getClientById(clientId);
            if (client != null) {
                favorite.setClientId(client);
                if (!isFavorite((client.getId()), favorite.getMovieApiId())) {
                    favoriteListRep.save(favorite);
                    return true;
                }
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;
    }

    public boolean deleteFavorite(int clientId, int movieApiID) {
        try {
            if (isFavorite(clientId, movieApiID)) {
                Client client = clientRep.getClientById(clientId);
                FavoriteList favoriteList = favoriteListRep.findByClientIdAndMovieApiId(client, movieApiID);
                favoriteListRep.delete(favoriteList);
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;
    }

    public boolean isFavorite(int clientId, int movieApiId) {
        try {
            Client client = clientRep.getClientById(clientId);
            FavoriteList favoriteList = favoriteListRep.findByClientIdAndMovieApiId(client, movieApiId);
            return favoriteList != null;
        } catch (Exception e) {
            return false;
        }
    }

    public List<FavoriteList> getListById(int id) {
        try {
            return favoriteListRep.findByClientIdId(id);
        } catch (Exception e) {
            return null;
        }
    }

}
