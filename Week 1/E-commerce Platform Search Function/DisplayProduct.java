public class DisplayProduct {
    public static void display(Product product) {
        System.out.println("Product-Id : " + product.getProductId());
        System.out.println("Product-Name : " + product.getProductName());
        System.out.println("Category : " + product.getCategory());
    }
}
