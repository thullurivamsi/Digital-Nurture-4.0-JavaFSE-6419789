import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.* ;

public class CalculatorTest {
    static Calculator calculator ;
    double result ;

    @BeforeAll
    static void setCalculator() {
        calculator = new Calculator() ;
    }

    @AfterEach
    void print() {
        System.out.println("Test completed");
    }

    @Test
    public void testAddCase1() {
        result = calculator.add(4, 5) ;
        assertEquals(9.0, result);
    }

    @Test
    public void testAddCase2() {
        result = calculator.add(0, 0) ;
        assertEquals(0, result);
    }

    @Test
    public void testAddCase3() {
        result = calculator.add(4.7, 6.9) ;
        assertEquals(11.6, result);
    }

    @Test
    public void testAddCase4() {
        result = calculator.add(3.2, 9.7) ;
        assertEquals(12.9, result);
    }

    @Test
    public void testSubtractCase1() {
        result = calculator.subtract(0, 9) ;
        assertEquals(-9, result);
    }

    @Test
    public void testSubtractCase2() {
        result = calculator.subtract(8, 8) ;
        assertEquals(0, result);
    }

    @Test
    public void testSubtractCase3() {
        result = calculator.subtract(7.5, 9.3) ;
        assertEquals(-1.8, result);
    }

    @Test
    public void testSubtractCase4() {
        result = calculator.subtract(5.4, 3.7) ;
        assertEquals(1.7, result);
    }

    @Test
    public void testMultiplyCase1() {
        result = calculator.multiply(1, 9) ;
        assertEquals(9, result);
    }

    @Test
    public void testMultiplyCase2() {
        result = calculator.multiply(0, 10) ;
        assertEquals(0, result);
    }

    @Test
    public void testMultiplyCase3() {
        result = calculator.multiply(-5, -4) ;
        assertEquals(20, result);
    }

    @Test
    public void testMultiplyCase4() {
        result = calculator.multiply(-6, 7) ;
        assertEquals(-42, result);
    }

    @Test
    public void testMultiplyCase5() {
        result = calculator.multiply(5.3, 8.6) ;
        assertEquals(45.58, result);
    }

    @Test
    public void testMultiplyCase6() {
        result = calculator.multiply(-4.2, 7.1) ;
        assertEquals(-29.82, result);
    }

    @Test
    public void testDivideCase1() {
        result = calculator.divide(14, 4) ;
        assertEquals(3.5, result);
    }

    @Test
    public void testDivideCase2() {
        result = calculator.divide(10, 3) ;
        assertEquals(3.3333 , result);
    }

    @Test
    public void testDivideCase3() {
        result = calculator.divide(4.5, 2.7);
        assertEquals(1.6667, result);
    }

    @Test
    public void testErrorCase() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(1, 0) ;
        }) ;
    }

}
