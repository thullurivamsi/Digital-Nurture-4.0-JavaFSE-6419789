public class Product {
    private int productId;
    private String productName, category;
    static int id = 101;

    public Product(String productName, String category) {
        this.productId = id ++;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() { return this.productId; }
    public String getProductName() { return this.productName; }
    public String getCategory() { return this.category; }
}
