package backend.myfilmapp.controller;

import backend.myfilmapp.module.Film;
import backend.myfilmapp.service.FilmService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/film")
@CrossOrigin
public class FilmController {

    private final FilmService service;

    public FilmController(FilmService service) {
        this.service = service;
    }

    @GetMapping("/getAll")
    public List<Film> getAll() {
        return service.getAllFilm();
    }

    @GetMapping("/byId")
    public Film byId(@RequestBody int id) {
        return service.getFilmById(id);
    }

    @GetMapping("/byTitle")
    public Film byTitle(@RequestBody String title) {
        return service.getFilmByTitle(title);
    }

    @GetMapping("/byGenre")
    public Film byGenre(@RequestBody Film.genre genre) {
        return service.getFilmByGenre(genre);
    }

    @GetMapping("/byType")
    public Film byType(@RequestBody Film.type type) {
        return service.getFilmByType(type);
    }
}
