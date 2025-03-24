package backend.myfilmapp.module;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.GetMapping;

@Entity
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int favorite_id;

    @ManyToOne
    private Client client_username;

    @ManyToOne
    private MovieSerie movie_id;

    @JoinColumn(name = "favorite_movieTitle", columnDefinition = "varchar(255) NOT NULL")
    private String movieTitle;





    public Favorite() {}
}
