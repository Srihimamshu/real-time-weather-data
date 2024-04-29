
import React from "react";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
    <div className="body">
      <img
        src={"/icons/day.png"}
        className="w-40 h-40 mx-auto my-5"
        alt="Weather Logo"
      />
      <span className="text-[#446ba5] text-md font-semibold block text-center">
        Find Weather of your city
      </span>
      <form
        onSubmit={fetchWeather}
        className="flex flex-row justify-around items-center m-5 border-black border-2 rounded-md"
      >
        <input
          onChange={(e) => updateCity(e.target.value)}
          className="px-4 py-2 text-base font-semibold text-[#5b3e31] focus:outline-none "
          type="text"
          placeholder="City"
          required
        />
        <button
          type="submit"
          class="bg-[#7c736c] text-white text-base px-4 py-2 font-semibold focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 "
        >
          Search
        </button>


      </form>
      </div>
    </>
  );
};

export default CityComponent;
// // this enables searching various cities
// import styled from "styled-components";
// import React from "react";

// const SearchBox = styled.form`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   margin: 20px;
//   border: black solid 1px;
//   border-radius: 2px;

//   & input {
//     padding: 10px;
//     font-size: 14px;
//     border: none;
//     outline: none;
//     font-family: Montserrat;
//     font-weight: bold;
//   }
//   & button {
//     background-color: black;
//     font-size: 14px;
//     padding: 0 10px;
//     color: white;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     font-family: Montserrat;
//     font-weight: bold;
//   }
// `;
// const ChooseCityLabel = styled.span`
//   color: black;
//   margin: 10px auto;
//   font-size: 18px;
//   font-weight: bold;
// `;
// const WelcomeWeatherLogo = styled.img`
//   width: 140px;
//   height: 140px;
//   margin: 40px auto;
// `;
// const CityComponent = (props) => {
//   const { updateCity, fetchWeather } = props;
//   return (
//     <>
//       <WelcomeWeatherLogo src={"icons/perfect-day.png"} />
//       <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
//       <SearchBox onSubmit={fetchWeather}>
//         <input
//           onChange={(e) => updateCity(e.target.value)}
//           placeholder="City"
//         />
//         <button type={"submit"}>Search</button>
//       </SearchBox>
//     </>
//   );
// };
// export default CityComponent;