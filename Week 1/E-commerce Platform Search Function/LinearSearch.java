public class LinearSearch implements Search{
    @Override
    public Product search(int id) {
        for ( Product product : Inventory.getProducts() )
            if (id == product.getProductId())
                return product;
        return null;
    }
}
