package backend.myfilmapp.repository;

import backend.myfilmapp.module.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRep extends JpaRepository<Client, Integer> {
    Film getFilmById(int id);
    Film getFilmByTitle(String title);
    Film getFilmByGenre(Film.genre genre);
    Film getFilmByType(Film.type type);
}
