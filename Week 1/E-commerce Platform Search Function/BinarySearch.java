import java.util.ArrayList;
import java.util.Collections;

public class BinarySearch implements Search {
    @Override
    public Product search(int id) {
        ArrayList<Product> sortedProducts = new ArrayList<>(Inventory.getProducts());
        Collections.sort(sortedProducts, new SortInventory());
        int mid, left = 0, right = sortedProducts.size()-1;
        while(left <= right) {
            mid = ( left + right ) / 2 ;
            Product product = sortedProducts.get(mid);
            if ( id == product.getProductId() )
                return product;
            else if ( id < product.getProductId() )
                right = mid - 1 ;
            else
                left = mid + 1 ;
        }
        return null;
    }
}
