const express = require('express');
const axios = require('axios');
const Weather = require('../models/Weather');

const router = express.Router();
const apiKey = "29bd84e33289f196e453fde9559b7bbd";

// Fetch weather data from OpenWeather API
router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const { temp, humidity } = response.data.main;
    const description = response.data.weather[0].description;
    const windSpeed = response.data.wind.speed;

    // Save weather data to the database
    const weatherData = new Weather({
      city,
      temperature: temp,
      description,
      humidity,
      windSpeed,
    });

    await weatherData.save();
    res.status(200).json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ message: "Error fetching weather data." });
  }
});

// Get weather data from the database
router.get('/', async (req, res) => {
  try {
    const weathers = await Weather.find();
    res.status(200).json(weathers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data from database." });
  }
});

module.exports = router;
