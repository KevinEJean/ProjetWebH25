package backend.myfilmapp.controller;

import java.util.List;
import java.util.TreeSet;

import backend.myfilmapp.models.Client;
import org.springframework.web.bind.annotation.*;

import backend.myfilmapp.models.FavoriteList;
import backend.myfilmapp.service.FavoriteListService;

@RestController
@RequestMapping("/favoriteList")
@CrossOrigin
public class FavoriteListController {

    private final FavoriteListService service;
    public FavoriteListController(FavoriteListService service) {
        this.service = service;
    }


    @PostMapping("/add/{clientId}")
    public boolean addFavorite(@PathVariable int clientId, @RequestBody FavoriteList favorite) {
        return service.addFavorite(clientId, favorite);
    }

    @GetMapping("/getByListId/{id}")
    public List<FavoriteList> getByListId(@PathVariable int id) {
        return service.getListById(id);
    }

}
