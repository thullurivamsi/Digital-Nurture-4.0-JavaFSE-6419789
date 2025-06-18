import java.util.Scanner;

public class Test {
    public static void main ( String[] args ) {

        Scanner sc = new Scanner( System.in ) ;

        System.out.print("Enter the document type (pdf/word/excel) : ");
        String doc_type = sc.nextLine();
        DocumentFactory df = DocumentManager.getFactory(doc_type);
        if ( df == null) {
            System.out.println("Invalid document type !!! ");
            return;
        }

        df.createDocument().open();

    }
}
