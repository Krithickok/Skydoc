
# SkyDoc – Weather Forecast Application

**SkyDoc** is a modern, responsive weather forecast application built using React. It provides users with real-time weather data and a 7-day forecast by integrating the OpenWeatherMap API and RapidAPI Geo services. Designed with accessibility and performance in mind, SkyDoc allows users to search for cities and get quick, accurate weather information.

## Features

* Dynamic city search with autocomplete suggestions
* Current weather display including temperature, humidity, and conditions
* 7-day forecast with daily weather breakdown
* Responsive design for all screen sizes
* Clean, accessible UI built with modern React libraries

## Technologies Used

* React
* CSS
* `react-select-async-paginate`
* `react-accessible-accordion`
* OpenWeatherMap API
* Geo API (via RapidAPI)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/skydoc.git
   cd skydoc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up API keys:**

   * Create a `.env` file or update your API config file.
   * Add your keys:

     ```
     REACT_APP_WEATHER_API_KEY=your_openweathermap_key
     REACT_APP_GEO_API_KEY=your_rapidapi_key
     ```

4. **Run the application:**

   ```bash
   npm start
   ```

5. **Access the app:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Acknowledgments

This project was inspired by [ayushchahal44's Weather Dashboard](https://github.com/ayushchahal44/Weather-dashboard), with original enhancements and modifications.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

