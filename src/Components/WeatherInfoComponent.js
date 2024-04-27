import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";

export const WeatherInfoIcons = {
  sunset: "icons/sunset.png",
  sunrise: "icons/sunset.png",
  humidity: "icons/humidity.png",
  wind: "icons/wind.png",
  pressure: "icons/pressure.png",
};
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 5px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffed;
  border-radius: 6px;
  box-shadow: 0 4px 6px 0 #FFFDD0;
`;
const InfoIcon = styled.img`
  width: 50px;
  height: 50px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #7c736c;
  font-weight:800;
  margin: 10px;
  & span {
    font-size: 14px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel  >
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <>
      <div className="flex flex-row justify-between items-center ml-9 w-full mx-auto">
        <div className="capitalize text-md text-center sm:text-left">
          <span className="ml-3 text-lg">{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </div>
        <img src={WeatherIcons[weather?.weather[0].icon]} alt="Weather Icon" className="w-22 h-22 mx-auto  sm:w-26 sm:h-26" />
      </div>
      <div className="flex flex-col capitalize font-bold text-xl text-center sm:text-left justify-center items-center">
        <p>{`${weather?.sys?.country} - ${weather?.name}`}</p>
        <div className="flex items-center">
          <img src="icons/geography.png" alt="Weather Icon" className="w-13 h-13 mx-auto" />
          <div className="ml-2">
            <div className="text-sm text-gray-600">
              Latitude: {weather?.coord?.lat.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">
              Longitude: {weather?.coord?.lon.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly w-11/12 mx-auto font-">
        <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
        <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity} />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure} />

      </div>
    </>
  );
};

export default WeatherComponent;





// //weather
// import React from "react";
// import styled from "styled-components";
// import {WeatherIcons} from "../App";

// export const WeatherInfoIcons = {
//     sunset: "icons/sunset.png",
//     sunrise: "icons/sunrise.png",
//     humidity: "icons/humidity.png",
//     wind: "icons/wind.png",
//     pressure: "icons/pressure.png",
// };
// const Location = styled.span`
//   margin: 15px auto;
//   text-transform: capitalize;
//   font-size: 28px;
//   font-weight: bold;
// `;
// const Condition = styled.span`
//   margin: 20px auto;
//   text-transform: capitalize;
//   font-size: 14px;
//   & span {
//     font-size: 28px;
//   }
// `;
// const WeatherInfoLabel = styled.span`
//   margin: 20px 25px 10px;
//   text-transform: capitalize;
//   text-align: start;
//   width: 90%;
//   font-weight: bold;
//   font-size: 14px;
// `;
// const WeatherIcon = styled.img`
//   width: 100px;
//   height: 100px;
//   margin: 5px auto;
// `;
// const WeatherContainer = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 30px auto;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// const WeatherInfoContainer = styled.div`
//   display: flex;
//   width: 90%;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-wrap: wrap;
// `;
// const InfoContainer = styled.div`
//   display: flex;
//   margin: 5px 10px;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
// `;
// const InfoIcon = styled.img`
//   width: 36px;
//   height: 36px;
// `;
// const InfoLabel = styled.span`
//   display: flex;
//   flex-direction: column;
//   font-size: 14px;
//   margin: 15px;
//   & span {
//     font-size: 12px;
//     text-transform: capitalize;
//   }
// `;

// const WeatherInfoComponent = (props) => {
//     const {name, value} = props;
//     return (
//         <InfoContainer>
//             <InfoIcon src={WeatherInfoIcons[name]}/>
//             <InfoLabel>
//                 {value}
//                 <span>{name}</span>
//             </InfoLabel>
//         </InfoContainer>
//     );
// };
// const WeatherComponent = (props) => {
//     const {weather} = props;
//     const isDay = weather?.weather[0].icon?.includes('d')
//     const getTime = (timeStamp) => {
//         return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
//     }
//     return (
//         <>
//             <WeatherContainer>
//                 <Condition>
//                     <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
//                     {`  |  ${weather?.weather[0].description}`}
//                 </Condition>
//                 <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
//             </WeatherContainer>
//             <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

//             <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
//             <WeatherInfoContainer>
//                 <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
//                                       value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
//                 <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
//                 <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
//                 <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
//             </WeatherInfoContainer>
//         </>
//     );
// };

// export default WeatherComponent;