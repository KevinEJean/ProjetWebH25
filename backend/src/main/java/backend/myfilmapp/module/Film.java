package backend.myfilmapp.module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int film_id;
    private String title;
    private String release_year;
    private List<String> actors;
    private List<String> directors;
    private double price;
    public String description;
    public String language;
    public String rating;
    enum type{
        MOVIE,
        SERIES
    }
    enum genre {
        ACTION,
        DRAMA,
        COMEDY,
        SCI-FI
        // more ...
    }

    // getters + setters
}