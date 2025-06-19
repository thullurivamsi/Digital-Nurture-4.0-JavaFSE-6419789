import java.util.ArrayList;

public class MemorizedForecast implements ForecastStrategy{
    private ArrayList<Double> forecasts = new ArrayList<>();

    public double forecast(double amount, double rate_of_interest, int years) {
        if ( years >= forecasts.size()) {
            if (forecasts.isEmpty()) {
                this.forecasts.add(amount);
            }

            double forecast = this.forecast(amount, rate_of_interest, years - 1) * (rate_of_interest + 1);
            this.forecasts.add(forecast);
        }

        return this.forecasts.get(years);
    }

}
