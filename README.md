
#  Weather Data Retrieval and Analysis System




## Overview

    This project is designed to retrieve weather data from the OpenWeatherMap API at configurable intervals, convert temperature values based on user preference, and provide daily weather summaries including additional parameters like humidity and wind speed. The system is built to be robust, easy to set up, and extendable.


    
## Features

- **System Setup :** Initializes and connects to the OpenWeatherMap API using a valid API key.
- **Data Retrieval :** Simulates API calls at configurable intervals to retrieve and parse weather data for specified locations.
- **Temperature Conversion :** Converts temperature values from Kelvin to Celsius or Fahrenheit based on user preference.
- **Daily Weather Summary :** Simulates weather updates over several days and calculates average, maximum, minimum temperatures, and dominant weather conditions.
- **Additional Parameters :** Supports retrieval and analysis of additional weather parameters such as humidity and wind speed.
- **5 days Weather Forecast**
## Design choices

- **Modularity :** The system is divided into distinct modules for initialization, data retrieval, temperature conversion, and summary generation, making it easy to maintain and extend.
- **Configurability :** API call intervals and temperature units are configurable to allow flexibility.
- **Extensibility :** Designed to easily incorporate additional weather parameters from the OpenWeatherMap API.
## Setup

### Prerequisites
    1.Node.js (v14 or later)
    2.npm (v6 or later)
### Backend Setup

#### 1.Navigate to the Backend Directory:

    cd backend
    npm install
####  2.Configure the Mongo Database:
Create a new MongoDB database and replace the uri in db.js

    const uri = '<YOUR_MONGODB_URI>'
####  3.Start the Backend Server:

    node index.js
The server will be running at http://localhost:3000.

### Frontend Setup

    click on the index.html file

Design Choices
Backend
Express: For handling API requests.
Mongoose: For interacting with MongoDB and managing data.
AST (Abstract Syntax Tree): Used to represent and evaluate rules dynamically.
Frontend
React: For building the user interface.
Component Structure: Designed to modularize the UI and make it extendable.
Testing Instructions
Create Individual Rules
Test rule creation by sending POST requests to /create with different rule strings.
Combine Rules
Combine created rules using the /combine endpoint and verify the combined AST.
Evaluate Rule
Send a POST request to /evaluate with rule ID and user data to check the evaluation logic.
## Dependencies

- **Node.js :** JavaScript runtime.
- **Express :** Web framework for Node.js.
- **Mongoose :** MongoDB object modeling tool.
- **HTML & JavaScript :** For building user interfaces.
## Tech stack

- **Client :** HTML, Javascrip,CSS

- **Server :** Node.js, Express.js,Mongodb
