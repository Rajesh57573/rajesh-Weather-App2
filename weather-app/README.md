# Weather App 🌦️

A responsive weather application built with **HTML, CSS, and JavaScript**. It uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current) to retrieve current weather information for a city entered by the user.

## Features

- Search for current weather by city name.
- Display temperature in Celsius.
- Display humidity.
- Display wind speed in km/h.
- Change the weather illustration based on the reported condition (such as clear, clouds, drizzle, mist, rain, or snow).
- Responsive layout for desktop, tablet, and mobile screens.
- Search using the search icon.

## Built With

- **HTML5** — page structure.
- **CSS3** — styling, gradient card, and responsive media queries.
- **JavaScript** — API requests and dynamic updates to the weather display.
- **OpenWeatherMap API** — current weather data.
- **Font Awesome** — search icon.
- **Google Fonts (Poppins)** — typography.

## Project Structure

```text
weather-app/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── clear.png
        ├── clouds.png
        ├── drizzle.png
        ├── humidity.png
        ├── mist.png
        ├── rain.png
        ├── snow.png
        └── wind.png
```

Make sure the image filenames and paths match the files in your `assets/images/` folder.

## Getting Started

### 1. Download or clone the project

```bash
git clone <your-repository-url>
cd weather-app
```

Alternatively, download the repository as a ZIP file and extract it.

### 2. Configure your OpenWeatherMap API key

1. Create an account at [OpenWeatherMap](https://openweathermap.org/).
2. Generate an API key from your account's API keys page.
3. Open `script.js` and replace the placeholder with your key:

```javascript
const API_KEY = "YOUR_API_KEY";
```

**Security note:** A key embedded in frontend JavaScript is visible to anyone who visits the site. Do not commit a private or sensitive key to a public repository. For a public deployment, use a backend endpoint to keep the key out of client-side code, and review the API provider's key restrictions and terms.

### 3. Run the app locally

Open `index.html` in a browser, or use the **Live Server** extension in Visual Studio Code.

### 4. Use the app

1. Enter a city name in the search field.
2. Click the search icon.
3. View the returned temperature, humidity, wind speed, city name, and weather icon.

## How It Works

1. JavaScript reads the city name from the input field.
2. `encodeURIComponent()` safely encodes the city name for use as a URL query parameter.
3. The app sends a request to the OpenWeatherMap current-weather endpoint with metric units.
4. The response is parsed as JSON.
5. The app updates the page with the temperature, city, humidity, and wind speed.
6. The reported weather condition determines which local image is displayed.

Wind speed from the API is converted from metres per second to kilometres per hour by multiplying it by `3.6`.

## Troubleshooting

- **Weather request fails:** Check the browser console and the API response message. Confirm that the API key is valid and active.
- **City not found:** Check the spelling and try another city name.
- **Weather image does not change:** Confirm that the matching image exists in `assets/images/` and that its filename and path are correct.
- **Images are missing after deployment:** Ensure the `assets/images/` folder is included in the repository and use paths that match your hosting setup.
- **API key exposed:** Replace the key if it has been publicly shared. A frontend API key cannot be kept secret.

## Future Improvements

- Add a loading indicator and clearer in-app error messages.
- Support searching by pressing Enter.
- Add more weather-condition mappings, including fog and haze.
- Hide or replace the sample weather values until the first successful search.

## License

Add a license file if you intend to distribute this project. No specific license is declared here.
