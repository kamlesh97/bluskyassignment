import React, { useState } from "react";
import Chart from "./components/Chart";
import Json from "./components/greenhouse_gas_inventory_data_data.json";
import Map from "./components/Map";

var a = Json.filter(
  (j) =>
    j.category ===
    "carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent"
);

var country = [];
a.map((c) => {
  if (!country.includes(c.country_or_area)) {
    country.push(c.country_or_area);
  }
  return country;
});

console.log(country);

function App() {
  const [place, setPlace] = useState("");
  const [gas, setGas] = useState("");
  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleChangeGas = (event) => {
    setGas(event.target.value);
  };

  return (
    <div style={{ marginTop: "20%" }}>
      <form style={{ margin: "-15% 0 2% 5%" }}>
        <select value={place} onChange={handleChangePlace}>
          <option>select country</option>
          {country.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>

        <select value={gas} onChange={handleChangeGas}>
          <option>select Gas</option>
          {["co2", "n2o"].map((g) => (
            <option value={g}>{g}</option>
          ))}
        </select>
      </form>

      {place && gas ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0",
          }}
        >
          <Chart place={place} gas={gas} />
          <Map place={place} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
