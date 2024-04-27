import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "icons/sunny.png",
  "01n": "icons/night.png",
  "02d": "icons/day.png",
  "02n": "icons/cloudy-night.png",
  "03d": "icons/cloudy.png",
  "03n": "icons/cloudy.png",
  "04d": "icons/perfect-day.png",
  "04n": "icons/cloudy-night.png",
  "09d": "icons/rain.png",
  "09n": "icons/rain-night.png",
  "10d": "icons/rain.png",
  "10n": "icons/rain-night.png",
  "11d": "icons/storm.png",
  "11n": "icons/storm.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  // change2
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {

  // to store the error
  const [flashmessage,setflashmessage]=useState(""); 

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    try{
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    console.log(response.data);
    updateWeather(response.data);
    setflashmessage("");
    } catch (error){
      setflashmessage("Failed to fetch the weather. Enter the city name correctly!");
      console.error("Weather fethch error: ",error);
    }

  };

  const handleHomeClick=()=>{
    window.location.reload();
  }
  return (
    <>
      <div className="mb-12">
        <nav className="bg-gradient-to-r from-indigo-200 to-indigo-200">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center ">
                <div className="m-7"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex justify-between items-center px-4">
                    <p className="bg-gradient-to-r from-light-teal-300 to-dark-indigo-500 text-gray-800 rounded-md px-3 py-2 text-md font-semibold font-serif">Real Time Weather Data</p>
                  </div>
                </div>
              </div>
              <button onClick={handleHomeClick} className="bg-indigo-200 rounded text-gray px-3 my-3 mr-6 font-medium hover:bg-blue-200 hover:text-gray-800 font-semibold font-serif">Home</button>
            </div>
          </div>
        </nav>
      </div>


      {flashmessage&& (
      
        <div className="text-center flex items-center justify-center m-2  ">
          <span className="text-white flex gap-1 bg-[#4F93DF] rounded-lg p-3 shadow-md font-medium"><img src="icons/error.png" alt="Error icon" /> {flashmessage}</span>
        </div>
        

      )}
      <Container >
        
        <h2 className=" text-center font-bold text-md text-black-900">Know your city's weather</h2>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>

    </>

  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
