package backend.myfilmapp.service;

import backend.myfilmapp.module.MovieSerie;
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
}
