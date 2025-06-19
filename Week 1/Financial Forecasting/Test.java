import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the principle Amount : ");
        double amount = scanner.nextDouble();

        System.out.print("Enter the rate of interest : ");
        double rate_of_interest = scanner.nextDouble();

        System.out.print("Enter the time period in years : ");
        int years = scanner.nextInt();

        ForecastStrategy forecastStrategy = new RecursiveForecast();
        ForecastManager forecastManager = new ForecastManager(forecastStrategy);
        forecastManager.showForecast(amount, rate_of_interest, years);

        forecastStrategy = new MemorizedForecast();
        forecastManager = new ForecastManager(forecastStrategy);
        forecastManager.showForecast(amount, rate_of_interest, years);

    }
}
