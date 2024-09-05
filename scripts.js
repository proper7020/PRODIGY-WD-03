const apiKey = "038013b894989371bcacfebd85cdc9e6"; // Your provided API key
const apiURL = "https://api.openweathermap.org/data/2.5/weather";

window.onload = () => {
  // Fetch weather data based on user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherData(
        `${apiURL}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

function getWeatherByCity() {
  const city = document.getElementById("locationInput").value;
  fetchWeatherData(`${apiURL}?q=${city}&units=metric&appid=${apiKey}`);
}

function fetchWeatherData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "locationName"
      ).innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("tempValue").innerText = Math.round(
        data.main.temp
      );
      document.getElementById("weatherDesc").innerText =
        data.weather[0].description;
      document.getElementById("humidityValue").innerText = data.main.humidity;
      document.getElementById("windValue").innerText = data.wind.speed;
    })
    .catch((error) => {
      alert("Unable to fetch weather data.");
      console.error(error);
    });
}




// const apiKey = "038013b894989371bcacfebd85cdc9e6"; // Your provided API key
// const apiURL = "https://api.openweathermap.org/data/2.5/weather";

// window.onload = () => {
//   // Fetch weather data based on user's location
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
//       fetchWeatherData(
//         `${apiURL}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
//       );
//     });
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }

//   // Update Date and Time
//   updateDateTime();
//   setInterval(updateDateTime, 1000); // Update time every second
// };

// function getWeatherByCity() {
//   const city = document.getElementById("locationInput").value;
//   fetchWeatherData(`${apiURL}?q=${city}&units=metric&appid=${apiKey}`);
// }

// function fetchWeatherData(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById(
//         "locationName"
//       ).innerText = `${data.name}, ${data.sys.country}`;
//       document.getElementById("tempValue").innerText = Math.round(
//         data.main.temp
//       );
//       document.getElementById("weatherDesc").innerText =
//         data.weather[0].description;
//       document.getElementById("humidityValue").innerText = data.main.humidity;
//       document.getElementById("windValue").innerText = data.wind.speed;
//     })
//     .catch((error) => {
//       alert("Unable to fetch weather data.");
//       console.error(error);
//     });
// }

// function updateDateTime() {
//   const now = new Date();

//   // Get date components
//   const year = now.getFullYear();
//   const month = now.getMonth() + 1; // Months are zero-indexed
//   const day = now.getDate();

//   // Get time components
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");

//   // Display the date and time
//   document.getElementById("dateValue").innerText = `${day}/${month}/${year}`;
//   document.getElementById(
//     "timeValue"
//   ).innerText = `${hours}:${minutes}:${seconds}`;
// }
