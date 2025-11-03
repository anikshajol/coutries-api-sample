import React, { use, useState } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

const Countries = ({ fetchPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countries = use(fetchPromise);
  const handleVisitedCountries = (country, isVisited) => {
    const id = country?.name?.official;
    setVisitedCountries((prevCountries) => {
      const found = prevCountries.find((item) => item.name.official === id);
      if (isVisited) {
        if (!found) {
          return [...prevCountries, country];
        }
      } else {
        return prevCountries.filter((item) => item?.name?.official !== id);
      }
    });
  };

  return (
    <div>
      <h2>Visited Countries {visitedCountries.length} </h2>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.name.official}>{country.name.common}</li>
        ))}
      </ul>
      <div className="container">
        {countries
          .filter((country) => country.name.official !== "State of Israel")
          .map((country) => (
            <Country
              key={country.name.official}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
            ></Country>
          ))}
      </div>
    </div>
  );
};

export default Countries;
