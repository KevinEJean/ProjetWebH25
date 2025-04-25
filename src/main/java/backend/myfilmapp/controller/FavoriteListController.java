package backend.myfilmapp.controller;

import java.util.List;

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

//    @PostMapping("/add")
//    public void add(@RequestBody List<String> list) {
//        service.saveList(list);
//    }

    @GetMapping("/getByListId/{id}")
    public FavoriteList getByListId(@PathVariable int id) {
        return service.getListById(id);
    }

//    @GetMapping("/getByClientId/{clientId}")
//    public FavoriteList getByListId(@PathVariable Client clientId) {
//        return service.getListByClientId(clientId);
//    }
}
