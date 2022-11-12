import React, {
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import "./component.css";

const MapOverlay = ({ center, zoom, children }) => {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, zoom, center]);

  return (
    <div>
      <div ref={ref} className="map" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
      <SearchField />
      <SearchResult />
    </div>
  );
};

export default MapOverlay;
