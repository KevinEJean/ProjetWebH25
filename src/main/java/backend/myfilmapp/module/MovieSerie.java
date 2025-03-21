package backend.myfilmapp.module;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MovieSerie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int movieId;

    @Column(unique = true, columnDefinition = "varchar (255) NOT NULL CHECK (movie_title <> '')")
    private String movieTitle;

    private String movieMetascore;
    private String movieImdbRating;
    private String movieYear;
    private String movieRuntime;
    private String moviePlot;
    private String movieRelease;
    private String movieDirectors;
    private String movieGenre;

    @Column(columnDefinition = "varchar (5) CHECK (movie_type = 'movie' OR movie_type = 'serie')")
    private String movieType;

    private String movieActors;
    private String movieProduction;
    private String movieLanguage;
    private String movieCountry;
    private String movieAwards;
    private String movieBoxOffice;
    private Boolean movieDvd;





    public MovieSerie() {}

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getMovieMetascore() {
        return movieMetascore;
    }

    public void setMovieMetascore(String movieMetascore) {
        this.movieMetascore = movieMetascore;
    }

    public String getMovieImdbRating() {
        return movieImdbRating;
    }

    public void setMovieImdbRating(String movieImdbRating) {
        this.movieImdbRating = movieImdbRating;
    }

    public String getMovieYear() {
        return movieYear;
    }

    public void setMovieYear(String movieYear) {
        this.movieYear = movieYear;
    }

    public String getMovieRuntime() {
        return movieRuntime;
    }

    public void setMovieRuntime(String movieRuntime) {
        this.movieRuntime = movieRuntime;
    }

    public String getMoviePlot() {
        return moviePlot;
    }

    public void setMoviePlot(String moviePlot) {
        this.moviePlot = moviePlot;
    }

    public String getMovieRelease() {
        return movieRelease;
    }

    public void setMovieRelease(String movieRelease) {
        this.movieRelease = movieRelease;
    }

    public String getMovieDirectors() {
        return movieDirectors;
    }

    public void setMovieDirectors(String movieDirectors) {
        this.movieDirectors = movieDirectors;
    }

    public String getMovieGenre() {
        return movieGenre;
    }

    public void setMovieGenre(String movieGenre) {
        this.movieGenre = movieGenre;
    }

    public String getMovieType() {
        return movieType;
    }

    public void setMovieType(String movieType) {
        this.movieType = movieType;
    }

    public String getMovieActors() {
        return movieActors;
    }

    public void setMovieActors(String movieActors) {
        this.movieActors = movieActors;
    }

    public String getMovieProduction() {
        return movieProduction;
    }

    public void setMovieProduction(String movieProduction) {
        this.movieProduction = movieProduction;
    }

    public String getMovieLanguage() {
        return movieLanguage;
    }

    public void setMovieLanguage(String movieLanguage) {
        this.movieLanguage = movieLanguage;
    }

    public String getMovieCountry() {
        return movieCountry;
    }

    public void setMovieCountry(String movieCountry) {
        this.movieCountry = movieCountry;
    }

    public String getMovieAwards() {
        return movieAwards;
    }

    public void setMovieAwards(String movieAwards) {
        this.movieAwards = movieAwards;
    }

    public String getMovieBoxOffice() {
        return movieBoxOffice;
    }

    public void setMovieBoxOffice(String movieBoxOffice) {
        this.movieBoxOffice = movieBoxOffice;
    }

    public Boolean getMovieDvd() {
        return movieDvd;
    }

    public void setMovieDvd(Boolean movieDvd) {
        this.movieDvd = movieDvd;
    }
}
