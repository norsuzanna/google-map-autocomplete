import { List } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedPlace } from "../redux/actions/placeActions";

const SearchResult = () => {
  const places = useSelector((state) => state.allPlaces.places);
  const dispatch = useDispatch();

  const renderMap = (address) => {
    dispatch(selectedPlace(address));
  };

  return (
    <div>
      {places.length !== 0 ? (
        <List
          size="large"
          bordered
          dataSource={places}
          renderItem={(place) => (
            <List.Item onClick={() => renderMap(place)}>
              {place.formatted_address}
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchResult;
