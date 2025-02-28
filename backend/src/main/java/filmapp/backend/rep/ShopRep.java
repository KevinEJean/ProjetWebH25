package filmapp.backend.rep;

import filmapp.backend.module.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRep extends JpaRepository<Shop, Long> {

    Shop removeReceiptById(Long id);
    Shop getReceiptById(Long id);
}
