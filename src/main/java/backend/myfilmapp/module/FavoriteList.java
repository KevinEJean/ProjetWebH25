package backend.myfilmapp.module;

import jakarta.persistence.*;

@Entity
public class FavoriteList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int favoriteList_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CLIENT_ID")
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MOVIE_ID")
    private MovieSerie movieSerie;





    public FavoriteList() {}

    public int getFavoriteList_id() {
        return favoriteList_id;
    }

    public void setFavoriteList_id(int favoriteList_id) {
        this.favoriteList_id = favoriteList_id;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public MovieSerie getMovieSerie() {
        return movieSerie;
    }

    public void setMovieSerie(MovieSerie movieSerie) {
        this.movieSerie = movieSerie;
    }
}
