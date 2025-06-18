import java.util.HashMap;

public class DocumentManager {
    public static HashMap< String, DocumentFactory > map = new HashMap<>();
    static {
        map.put("pdf", new PdfFactory());
        map.put("word", new WordFactory());
        map.put("excel", new ExcelFactory());
    }

    public static DocumentFactory getFactory ( String doc_type) {
        return map.get(doc_type.toLowerCase());
    }

}
