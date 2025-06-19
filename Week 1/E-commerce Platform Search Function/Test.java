import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Inventory.addProduct(new Product("Poco X3", "Electronics"));
        Inventory.addProduct(new Product("Acer Swift 3", "Electronics"));
        Inventory.addProduct(new Product("SkyBags Y27", "Accessories"));
        Inventory.addProduct(new Product("Baya Men's Crocs", "Accessories"));
        Inventory.addProduct(new Product("Jersey's Cheese", "Groceries"));
        Inventory.addProduct(new Product("Heritage Condensed Milk", "Groceries"));

        Scanner scan = new Scanner(System.in);
        try{
            System.out.print("Enter the type of search (linear/binary) : ");
            String type = scan.nextLine();
            System.out.print("Enter the product id : ");
            int id = scan.nextInt();

            Product p = SearchEngine.searchEngine(type).search(id);
            DisplayProduct.display(p);
        }
        catch (NullPointerException e){
            System.out.println("Product unavailable");
        }
        catch (Exception e) {
            System.out.println("Something went wrong");
        }
    }
}