package backend.myfilmapp.repository;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteListRep extends JpaRepository<FavoriteList, Integer> {
    public List<FavoriteList> findByClientIdId(int clientId);
    public FavoriteList findByMovieApiId(int movieApiId);
    public FavoriteList findByClientIdAndMovieApiId(Client client, int movieApiId);
}
