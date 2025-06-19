import java.util.Comparator;

public class SortInventory implements Comparator<Product> {
    @Override
    public int compare(Product o1, Product o2) {
        return Integer.compare(o1.getProductId(), o2.getProductId());
    }
}
