package filmapp.backend.service;

import filmapp.backend.module.Shop;
import filmapp.backend.rep.ShopRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopServiceImpl implements ShopService {

    @Autowired
    private ShopRep shopRep;

    @Override
    public Shop saveReceipt(Shop receipt) { return shopRep.save(receipt); }

    @Override
    public Shop removeById(Long id) { return shopRep.removeReceiptById(id); }

    @Override
    public List<Shop> getAllReceipt() { return shopRep.findAll(); }

    @Override
    public Shop getById(Long id) { return shopRep.getReceiptById(id); }
}
