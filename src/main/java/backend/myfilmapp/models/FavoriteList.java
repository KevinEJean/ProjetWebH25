package backend.myfilmapp.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class FavoriteList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client clientId;

    @Column(name = "movie_api_id", nullable = false)
    private  int movieApiId;

    @Column(columnDefinition = "varchar(200)", name = "Titre", nullable = false)
    private String titre;

    @Column(columnDefinition = "varchar(500)", name = "url_image", nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String type;

    @Column(name = "date_de_creation")
    private LocalDateTime dateAjout = LocalDateTime.now();

    public FavoriteList(Client clientID, int movieID, String title, String url, String typeMovie, LocalDateTime creationDate) {
    	this.clientId = clientID;
    	this.movieApiId = movieID;
    	this.titre = title;
    	this.imageUrl = url;
    	this.type = typeMovie;
    	this.dateAjout = creationDate;
    }

    public FavoriteList() {}

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public Client getClientId() { return clientId; }

    public void setClientId(Client clientId) { this.clientId = clientId; }

    public int getMovieApiId() { return movieApiId; }

    public void setMovieApiId(int movieApiId) { this.movieApiId = movieApiId; }

    public String getTitre() { return titre; }

    public void setTitre(String titre) {this.titre = titre; }

    public String getImageUrl() { return imageUrl; }

    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }

    public LocalDateTime getDateAjout() { return dateAjout; }

    public void setDateAjout(LocalDateTime dateAjout) { this.dateAjout = dateAjout; }

}
