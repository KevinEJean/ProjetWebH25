package backend.myfilmapp.module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int favorite_id;

    @OneToOne
    private Client client_username;

    @OneToOne
    private MovieSerie movieSerie_id;





    public Favorite() {}

    public int getFavorite_id() {
        return favorite_id;
    }

    public void setFavorite_id(int favorite_id) {
        this.favorite_id = favorite_id;
    }

    public Client getClient_username() {
        return client_username;
    }

    public void setClient_username(Client client_username) {
        this.client_username = client_username;
    }

    public MovieSerie getMovieSerie_id() {
        return movieSerie_id;
    }

    public void setMovieSerie_id(MovieSerie movieSerie_id) {
        this.movieSerie_id = movieSerie_id;
    }
}
