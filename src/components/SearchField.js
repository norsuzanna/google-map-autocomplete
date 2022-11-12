import React, { useRef } from "react";
import { Input as AntInput } from "antd";
import { usePlacesWidget } from "react-google-autocomplete";
import { useDispatch } from "react-redux";
import { setPlaces, selectedPlace } from "../redux/actions/placeActions";
import "./component.css";

const SearchField = () => {
  const dispatch = useDispatch();
  const antInputRef = useRef(null);
  const { ref: antRef } = usePlacesWidget({
    onPlaceSelected: (place) => {
      dispatch(setPlaces(place));
      dispatch(selectedPlace(place));
    },
    
  });

  return (
    <AntInput
      ref={(c) => {
        antInputRef.current = c;
        if (c) antRef.current = c.input;
      }}
      placeholder="Enter a city"
    />
  );
};

export default SearchField;
