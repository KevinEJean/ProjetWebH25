package backend.myfilmapp.repository;

import backend.myfilmapp.models.Client;
import backend.myfilmapp.models.FavoriteList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteListRep extends JpaRepository<FavoriteList, Integer> {
    FavoriteList getFavoriteListById(int id);
//    FavoriteList getFavoriteListByClientId(Client clientId);
}
