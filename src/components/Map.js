import React from "react";
import GoogleMapReact from "google-map-react";

import Json from "./world_country_and_usa_states_latitude_and_longitude_values.json";

const AnyReactComponent = ({ place }) => <h1>{place}</h1>;

const Map = ({ place, center, zoom }) => {
  console.log(place);

  const marker = Json.map((c) => {
    if (place === c.country) {
      return (
        <AnyReactComponent lat={c.latitude} lng={c.longitude} place={place} />
      );
    }
    return null;
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "55vh", width: "33%" }} className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA3aI_dMmdhdPS1IEkAUyJEUyRvoYwBc00" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      <div style={{marginLeft:'47%'}}>India</div>
      <h1 style={{ marginLeft: "15%", color: "gray" }}>it should be - {place}</h1>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 20.593684,
    lng: 78.96288,
  },
  zoom: 4,
};

export default Map;
