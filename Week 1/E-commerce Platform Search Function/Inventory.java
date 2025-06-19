import java.util.ArrayList;

public class Inventory {
    private static ArrayList<Product> products = new ArrayList<>();

    private Inventory(){
        System.out.println("Inventory is created");
    }

    public static ArrayList<Product> getProducts() { return products; }

    public static void addProduct(Product product) {
       products.add(product);
    }
}