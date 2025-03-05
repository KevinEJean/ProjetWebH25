package backend.myfilmapp.service;

import backend.myfilmapp.module.Film;
import backend.myfilmapp.repository.FilmRep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    private FilmRep rep;

    public FilmService(FilmRep rep) {
        this.rep = rep;
    }

    // save manuellement

    public List<Film> getAllFilm() {
        return rep.findAll();
    }

    public Film getFilmById(int id) {
        return rep.getFilmById(id);
    }

    public Film getFilmByTitle(String title) {
        return rep.getFilmByTitle(title);
    }

    public Film getFilmByGenre(Film.genre genre) {
        return rep.getFilmByGenre(genre);
    }

    public Film getFilmByType(Film.type type) {
        return rep.getFilmByType(type);
    }
}
