let weather = {
    apiKey: "29bd84e33289f196e453fde9559b7bbd",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data.city;
      const { icon, description } = data.list[0].weather[0];
      const { temp, feels_like, humidity, temp_min, temp_max } = data.list[0].main;
      const { speed } = data.list[0].wind;
      const datetime = data.list[0].dt_txt;
  
      const convertTemp = (temp, unit) => {
        if (unit === "F") {
          return ((temp * 9) / 5 + 32).toFixed(2);
        } else if (unit === "K") {
          return (temp + 273.15).toFixed(2);
        } else {
          return temp.toFixed(2);
        }
      };
  
      const selectedUnit = ttt;
  
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".dt").innerText = "Last updated: " + datetime;
  
      document.querySelector(".temp").innerText = convertTemp(temp, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp-feels-like").innerText = "Feels like: " + convertTemp(feels_like, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp-avg").innerText = "Avg Temp: " + convertTemp((temp_min + temp_max) / 2, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp-min").innerText = "Min Temp: " + convertTemp(temp_min, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp-max").innerText = "Max Temp: " + convertTemp(temp_max, selectedUnit) + " °" + selectedUnit;
  
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  
      document.querySelector(".weather").classList.remove("loading");
  
      document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
      document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
      document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
      document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
      document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
  
      document.querySelector(".temp1").innerText = convertTemp(data.list[0].main.temp, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp2").innerText = convertTemp(data.list[1].main.temp, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp3").innerText = convertTemp(data.list[2].main.temp, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp4").innerText = convertTemp(data.list[3].main.temp, selectedUnit) + " °" + selectedUnit;
      document.querySelector(".temp5").innerText = convertTemp(data.list[4].main.temp, selectedUnit) + " °" + selectedUnit;
  
      document.querySelector(".dt1").innerText = data.list[0].dt_txt;
      document.querySelector(".dt2").innerText = data.list[1].dt_txt;
      document.querySelector(".dt3").innerText = data.list[2].dt_txt;
      document.querySelector(".dt4").innerText = data.list[3].dt_txt;
      document.querySelector(".dt5").innerText = data.list[4].dt_txt;
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
  
  document.querySelector("#deg").addEventListener("change", function () {
    ttt = document.querySelector("#deg").value;
    weather.search();
  });
  
  let ttt = "C";
  
  weather.fetchWeather("Mumbai");
  