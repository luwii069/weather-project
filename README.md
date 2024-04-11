
# weather-project
This is a simple weather app that uses the OpenWeatherMap API to fetch and display weather data for a given city.

## Setup
To use this app, you will need to sign up for a free API key from OpenWeatherMap. Once you have your API key, replace the apikey variable in the code with your own key.

### Usage 
To use the app, enter the name of a city in the search box and click the search button. The app will then display the current temperature, humidity, and wind speed for that city, along with an icon representing the current weather conditions.

#### Error handling
If the city entered in the search box is not found, the app will display an error message. If there is a problem with the API request, the app will also display an error message.

##### Code structure 
The code is structured as follows:

apikey: Your OpenWeatherMap API key.
apiUrl: The base URL for the OpenWeatherMap API.
searchbox: A reference to the search input element.
searchtn: A reference to the search button element.
weatherIcon: A reference to the weather icon element.
checkWeather(city): An asynchronous function that fetches weather data for a given city and displays it on the page.
Event listener for the search button that calls the checkWeather function when the button is clicked.


