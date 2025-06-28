public class Calculator {
    public static double round(double num) {
        num = num * 10000;
        num = Math.round(num) ;
        num = num / 10000;
        return num ;
    }

    public double add(double num1, double num2) {
        return round(num1 + num2 );
    }

    public double subtract(double num1, double num2) {
        return round(num1 - num2 );
    }

    public double multiply(double num1, double num2) {
        return round(num1 * num2 ) ;
    }

    public double divide(double num1, double num2){
        if (num2 == 0) throw new ArithmeticException();
        return round(num1 / num2 ) ;
    }
}
