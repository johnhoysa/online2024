import { fetchWeatherApi } from 'openmeteo';

// const input = document.getElementById('myInput');
// const button = document.getElementById('submitBtn');

// button.addEventListener('click', () => {
//   const weatherValue = input.value;

//   console.log('Captured value:', weatherValue);
//   // Use inputValue however you like!
//   evaluateWeather(weatherValue);
// });

// function evaluateWeather(weatherValue) {
//   // Hey this can be converted to a ternary like below
//   // if (weatherValue > 85) {
//   //   console.log('Its a little warm out for me');
//   // } else if (weatherValue < 60) {
//   //   console.log('Its a little cool out, time for a hoodie');
//   // } else {
//   //   console.log('What a great day to ride be outside!');
//   // }

//   const weatherMessage =
//     weatherValue > 85
//       ? "It's a hot day 🌞"
//       : weatherValue < 60
//         ? "It's a cold day ❄️"
//         : 'Perfect weather! 😎';
//   console.log(weatherMessage);
// }

//
//
// Using open-meteo and their default code, with some minor additions of my own
// https://open-meteo.com/en/docs
//
// This is data I would like to fetch from API
const params = {
  latitude: 30.16,
  longitude: -97.44,
  current: [
    'temperature_2m',
    'wind_speed_10m',
    'wind_gusts_10m',
    'apparent_temperature',
    'is_day'
  ],
  wind_speed_unit: 'mph',
  temperature_unit: 'fahrenheit',
  precipitation_unit: 'inch'
};

// The base URL of API
const url = 'https://api.open-meteo.com/v1/forecast';

async function getWeatherData() {
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  // Data for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();
  const current = response.current();

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0).value(),
      windSpeed10m: current.variables(1).value(),
      windGusts10m: current.variables(2).value(),
      apparentTemperature: current.variables(3).value(),
      isDay: current.variables(4).value()
    }
  };

  // Pass the weather data to another function I created.
  atxWeather(weatherData);
  // console.log('ATX weather: ', weatherData);
  // You can also return it if needed
  // return weatherData;
}

getWeatherData().catch(console.error);

function atxWeather(weatherData) {
  console.log('ATX weather: ', Math.floor(weatherData.current.temperature2m));
  const atxTempSpan = document.getElementById('atxTemp');
  const atxMessage = document.getElementById('atxMessage');
  const atxTemp = Math.floor(weatherData.current.temperature2m);
  const isDay = weatherData.current.isDay;
  let weatherMessage = '';

  if (isDay == 1) {
    // daytime
    weatherMessage =
      atxTemp > 85
        ? "It's hot out, lets go for swim 🏊‍♀️"
        : atxTemp < 60
          ? "It's chilly out, time to grab a coat 🧥"
          : 'Great weather for a bike ride! 🚲';
  } else {
    // night time
    weatherMessage =
      atxTemp > 85
        ? 'Why is it still so hot out at night? 🥵'
        : atxTemp < 60
          ? "It's chilly out tonight, time for a camp fire 🔥"
          : 'Great weather for having dinner outside 🧺';
  }

  atxTempSpan.innerHTML = atxTemp + ' °F';
  atxMessage.innerHTML = weatherMessage;
}
