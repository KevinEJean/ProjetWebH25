package backend.myfilmapp.repository;

import backend.myfilmapp.module.MovieSerie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRep extends JpaRepository<MovieSerie, Integer> {
    MovieSerie getByMovieId(int movieId);
    MovieSerie getByMovieTitle(String title);
    MovieSerie getByMovieType(String type);
}
