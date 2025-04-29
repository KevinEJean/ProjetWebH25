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

    // filtrer le movieApiId par client(ne peut avoir le même film dans la même list)
    public boolean addFavorite(int clientId, FavoriteList favorite) {
        Client client = clientRep.getClientById(clientId);
        if (client != null) {
            favorite.setClientId(client);
            FavoriteList favoriteList = favoriteListRep.findByMovieApiId(favorite.getMovieApiId());
            if (favoriteList == null) {
                favoriteListRep.save(favorite);
                return true;
            }
            return true;
        }
        return false;
    }

////////////////////////////////////////////////////////////////////////////3
    // Vérifier si un film est déjà dans la liste des favoris d'un client
    public boolean isFavorite(int clientId, int movieApiId) {
        Client client = clientRep.getClientById(clientId);
        FavoriteList favoriteList = favoriteListRep.findByClientIdAndMovieApiId(client, movieApiId);
        return favoriteList != null; // Si non null, le film est déjà un favori
    }
////////////////////////////////////////////////////////////////////////////3ls



    public List<FavoriteList> getListById(int id) {
        return favoriteListRep.findByClientIdId(id);
    }

}
