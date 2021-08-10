import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Json from "./greenhouse_gas_inventory_data_data.json";

function Chart({ place, gas }) {
  var co2 = Json.filter(
    (j) =>
      j.category ===
      "carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent"
  );

  var n2o = Json.filter(
    (j) =>
      j.category ===
      "nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent"
  );

  var a1 = co2.filter((c) => c.country_or_area === place);
  var b1 = n2o.filter((c1) => c1.country_or_area === place);

  return (
    <div style={{ height: "55vh", width: "65%" }}>
      <ResponsiveContainer aspect={3}>
        <LineChart data={gas === "co2" ? a1 : gas === "n2o" ? b1 : null}>
          <CartesianGrid />
          <XAxis dataKey="year" interval={"preserveStartEnd"} />
          <YAxis tickCount={10} />
          <Legend />
          <Tooltip />
          {gas === "co2" ? (
            <Line
              type="monotone"
              dataKey="value"
              stroke="red"
              activeDot={{ r: 6 }}
            />
          ) : (
            <Line
              type="monotone"
              dataKey="value"
              stroke="green"
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      <h1 style={{ margin: "0 35%", color: "gray" }}>Country - {place}</h1>
    </div>
  );
}

export default Chart;
