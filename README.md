# Weather App 🌦️

A responsive weather application built with **HTML, CSS, and
JavaScript**. Search for a city to view its current temperature,
humidity, wind speed, and weather condition using the OpenWeatherMap
API.

## Features

-   Search weather by city name
-   Display temperature in Celsius
-   Show humidity and wind speed
-   Change the weather icon based on the current condition
-   Responsive layout for desktop, tablet, and mobile screens
-   Search using the search icon

## Built With

-   HTML5
-   CSS3
-   JavaScript (Fetch API and async/await)
-   [OpenWeatherMap Current Weather
    API](https://openweathermap.org/current)
-   Font Awesome icons
-   Google Fonts --- Poppins

## Project Structure

``` text
weather-app/
├── index.html
├── style.css
├── script.js
├── README.md
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

Make sure the image filenames and paths match the files in your
`assets/images/` directory.

## Run Locally

1.  Clone your repository:

    ``` bash
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
    ```

2.  Open the project folder in VS Code.

3.  Start `index.html` with the **Live Server** extension, or open it in
    a browser.

4.  Enter a city name and click the search icon.

## Configure the OpenWeatherMap API Key

The app requests current weather data from OpenWeatherMap. In
`script.js`, configure your API key:

``` javascript
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

Create or manage your key at [OpenWeatherMap API
keys](https://home.openweathermap.org/api_keys).

**Security:** A key used directly in browser-side JavaScript is visible
to visitors. Do not commit a real key to a public GitHub repository. For
a public deployment, use a backend/serverless function to keep the key
secret, or use a restricted key if your provider supports suitable
restrictions. If a key has already been exposed, regenerate it.

## Deploy with Vercel

This is a static frontend project, so no build command is normally
required.

1.  Push the project to GitHub. Ensure `index.html`, `style.css`,
    `script.js`, and the `assets/` folder are committed.
2.  Sign in to [Vercel](https://vercel.com/).
3.  Select **Add New → Project**.
4.  Import your GitHub repository.
5.  Configure the project:
    -   **Framework Preset:** Other
    -   **Root Directory:** `./` (the repository root, where
        `index.html` is located)
    -   **Build Command:** leave empty, or override it with no command
        if Vercel requires a setting
    -   **Output Directory:** `.` (the repository root)
    -   **Install Command:** leave empty if no install step is required
6.  Click **Deploy**.
7.  Open the generated Vercel URL and test a city search.

If your HTML files are inside a subfolder, set **Root Directory** to
that folder instead. For this plain HTML/CSS/JavaScript project, do not
select a framework such as React unless you have converted the project
to use it.

## Deploy with GitHub Pages (Alternative)

1.  Push the project to GitHub.
2.  Open the repository's **Settings → Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch**.
4.  Choose the `main` branch and `/ (root)` folder, then save.
5.  Wait for the deployment URL to appear.

Use relative asset paths such as `./assets/images/clear.png` so images
work from the deployed project path. Remember that a browser-side API
key is visible in the deployed JavaScript.

## Troubleshooting

-   **`401 Unauthorized`:** Check whether the API key is valid and
    active. A newly created key may take time to activate.
-   **`400 Bad Request`:** Confirm that a city name is entered and that
    the request URL includes the `q` parameter.
-   **Weather icon does not change:** Check that the image element is
    selected correctly and that the image exists at the specified path.
-   **Images return `404`:** Verify filename spelling, capitalization,
    and the `assets/images/` directory structure.
-   **Works locally but not after deployment:** Confirm all project
    files were pushed to GitHub and use correct relative paths.
-   **No weather data appears:** Open the browser developer tools and
    inspect the Console and Network tabs for the API response message.

## Future Improvements

-   Add loading and error states in the interface
-   Support searching by pressing Enter
-   Add a forecast view
-   Improve accessibility and keyboard navigation
-   Move API requests to a serverless function to protect the API key

## License

Choose and add a license before distributing or reusing this project. If
no license file is included, others do not automatically receive
permission to reuse the code.
