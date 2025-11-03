import React, { useState } from "react";
import "../Country/Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    const updateVisited = !visited;
    setVisited(updateVisited);

    handleVisitedCountries(country, updateVisited);
  };

  return (
    <div className="country card">
      <h3>
        {country.name.official.length > 15
          ? country.name.official.slice(0, 25) + "..."
          : country.name.official}
      </h3>
      <div>
        <img src={country?.flags?.png} alt="" />
      </div>
      <p>Population {country.population} </p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "Not Visited"}{" "}
      </button>
    </div>
  );
};

export default Country;
