package backend.myfilmapp.service;

import backend.myfilmapp.models.MovieSerie;
import backend.myfilmapp.repository.MovieRep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRep rep;

    public MovieService(MovieRep rep) {
        this.rep = rep;
    }

    public void addMovie(MovieSerie movie) {
        rep.save(movie);
    }

    public List<MovieSerie> getAllMovie() {
        return rep.findAll();
    }

    public MovieSerie getMovieById(int id) {
        return rep.getByMovieId(id);
    }

    public MovieSerie getMovieByTitle(String title) {
        return rep.getByMovieTitle(title);
    }

    public MovieSerie getMovieByType(String type) {
        return rep.getByMovieType(type);
    }

    // #######################################################################################################
    // ###################################### DOES NOT WORK WITH SPACES ######################################

    public void updateMovie(MovieSerie newMovieService, String title) {
        MovieSerie movieSerie = rep.getByMovieTitle(title);
        movieSerie.setMovieId(newMovieService.getMovieId()); // HERE
        movieSerie.setMovieTitle(newMovieService.getMovieTitle());
        movieSerie.setMovieMetascore(newMovieService.getMovieMetascore());
        movieSerie.setMovieImdbRating(newMovieService.getMovieImdbRating());
        movieSerie.setMovieYear(newMovieService.getMovieYear());
        movieSerie.setMovieRuntime(newMovieService.getMovieRuntime());
        movieSerie.setMoviePlot(newMovieService.getMoviePlot());
        movieSerie.setMovieRelease(newMovieService.getMovieRelease());
        movieSerie.setMovieDirectors(newMovieService.getMovieDirectors());
        movieSerie.setMovieGenre(newMovieService.getMovieGenre());
        movieSerie.setMovieType(newMovieService.getMovieType());
        movieSerie.setMovieActors(newMovieService.getMovieActors());
        movieSerie.setMovieProduction(newMovieService.getMovieProduction());
        movieSerie.setMovieLanguage(newMovieService.getMovieLanguage());
        movieSerie.setMovieCountry(newMovieService.getMovieCountry());
        movieSerie.setMovieAwards(newMovieService.getMovieAwards());
        movieSerie.setMovieBoxOffice(newMovieService.getMovieBoxOffice());
        movieSerie.setMovieDvd(newMovieService.getMovieDvd());
        rep.save(movieSerie);
    }
}
