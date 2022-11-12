import { ActionTypes } from "../constants/action-types";

export const setPlaces = (places) => {
  return {
    type: ActionTypes.SET_PLACES,
    payload: places,
  };
};

export const selectedPlace = (place) => async (dispatch) => {
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  const address = place.formatted_address;

  dispatch({
    type: ActionTypes.SELECTED_PLACE,
    payload: { lat, lng, address },
  });
};
