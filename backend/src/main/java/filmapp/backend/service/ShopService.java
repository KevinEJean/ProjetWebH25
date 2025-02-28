package filmapp.backend.service;

import filmapp.backend.module.Shop;

import java.util.List;

public interface ShopService {

    public Shop saveReceipt(Shop receipt);
    public Shop removeById(Long Id);

    // FILTRE DE RECHERCHE POUR LES FACTURES
    public List<Shop> getAllReceipt();
    public Shop getById(Long id);
}
