package WeatherForecastByCity;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import IpmaApiClient.IpmaCityForecast;
import IpmaApiClient.IpmaService;
import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
//import weather.ipma_client.IpmaCityForecast; //may need to adapt package name
//import weather.ipma_client.IpmaService;

/**
 * demonstrates the use of the IPMA API for weather forecast
 */
public class WeatherStarter {

    //todo: should generalize for a city passed as argument
    private static final int ID_AVEIRO = 1010500;

    protected static final Logger logger = LogManager.getLogger();

    public static void  main(String[] args ) {

        final int id = Integer.parseInt(args[0]);

        // get a retrofit instance, loaded with the GSon lib to convert JSON into objects
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://api.ipma.pt/open-data/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        // create a typed interface to use the remote API (a client)
        IpmaService service = retrofit.create(IpmaService.class);
        // prepare the call to remote endpoint
        Call<IpmaCityForecast> callSync = service.getForecastForACity(id);

        try {
            Response<IpmaCityForecast> apiResponse = callSync.execute();
            IpmaCityForecast forecast = apiResponse.body();

            if (forecast != null) {
                var firstDay = forecast.getData().listIterator().next();

                System.out.printf( "max temp for %s is %4.1f %n",firstDay.getForecastDate(),Double.parseDouble(firstDay.getTMax()));
                logger.info("Max temp for" + firstDay.getForecastDate() + " is "+ Double.parseDouble(firstDay.getTMax()));
            } else {
                System.out.println( "No results for this request!");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }
}