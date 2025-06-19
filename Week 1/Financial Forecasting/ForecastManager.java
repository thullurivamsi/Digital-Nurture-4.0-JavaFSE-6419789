public class ForecastManager {
    private ForecastStrategy forecastStrategy;
    public ForecastManager(ForecastStrategy f){
        this.forecastStrategy = f;
    }

    public void showForecast(double amount, double rate_of_interest, int years){
        double forecast = forecastStrategy.forecast(amount, rate_of_interest, years);
        System.out.printf("Forecast at year - %d : %.2f\n", years, forecast);
    }
}
