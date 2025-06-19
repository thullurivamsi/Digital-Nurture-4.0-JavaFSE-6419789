public class SearchEngine {
    public static Search searchEngine(String type) {
        if ( type.equalsIgnoreCase("linear")) return new LinearSearch();
        else if ( type.equalsIgnoreCase("binary")) return new BinarySearch();
        else return null;
    }
}
