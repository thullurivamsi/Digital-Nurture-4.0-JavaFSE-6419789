public class RecursiveForecast implements ForecastStrategy{
    @Override
    public double forecast(double amount, double rate_of_interest, int years) {
        if ( years == 0 )
            return amount;
        return this.forecast( amount, rate_of_interest, years-1) * ( rate_of_interest + 1);
    }
}
