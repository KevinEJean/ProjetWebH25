package filmapp.backend.controller;

import filmapp.backend.module.Shop;
import filmapp.backend.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    private ShopService shopService;

    @PostMapping("/add")
    public String add(@RequestBody Shop receipt) {
        shopService.saveReceipt(receipt);
        return "Receipt saved!";
    }

    @DeleteMapping("/remove")
    public String remove(@RequestBody Long id) {
        shopService.removeById(id);
        return "Receipt ("+id+") has been removed!";
    }

    @GetMapping("/getAll")
    public List<Shop> getAll() {
        return shopService.getAllReceipt();
    }

    @GetMapping("/getById")
    public Shop getById(@RequestBody Long id) {
        return shopService.getById(id);
    }
}
