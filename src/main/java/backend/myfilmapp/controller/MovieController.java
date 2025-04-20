package backend.myfilmapp.controller;

import backend.myfilmapp.models.MovieSerie;
import backend.myfilmapp.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public String add(@RequestBody MovieSerie movie) {
        service.addMovie(movie);
        return "New movie has been added!";
    }

    @GetMapping("/getAll")
    public List<MovieSerie> getAll() {
        return service.getAllMovie();
    }

    @GetMapping("/getById")
    public MovieSerie byId(@RequestBody  int id) {
        return service.getMovieById(id);
    }

    @GetMapping("/getByTitle")
    public MovieSerie byTitle(@RequestBody String title) {
        return service.getMovieByTitle(title);
    }

    @GetMapping("/getByType")
    public MovieSerie byType(@RequestBody String type) {
        return service.getMovieByType(type);
    }

    @PutMapping("/update/{title}")
    public String update(@RequestBody MovieSerie newMovieSerie, @PathVariable String title) {
        service.updateMovie(newMovieSerie, title);
        return "Movie update";
    }
}
