import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Marker from "./Marker";
import MapOverlay from "./MapOverlay";
import { useSelector } from "react-redux";

let center = { lat: -34.397, lng: 150.644 };
let zoom = 12;

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const Map = () => {
  const selectedPlace = useSelector((state) => state.allPlaces.selectedPlace);
  const { lat, lng } = selectedPlace;
  
  return (
    <>
      <Wrapper render={render}>
        <MapOverlay
          zoom={zoom}
          center={!lat ? center : { lat: lat, lng: lng }}
        >
          <Marker position={!lat ? center : { lat: lat, lng: lng}} />
        </MapOverlay>
      </Wrapper>
    </>
  );
};

export default Map;
