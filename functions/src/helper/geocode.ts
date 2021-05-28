import axios from "axios";
import converToSlug from "./converToSlug";
import * as functions from "firebase-functions";

const getGeoCode = async (postal: string) => {
  const googleMapsAPIKey = functions.config().api.google_maps.key;

  const geocodeData = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${converToSlug(
      postal
    )}&key=${googleMapsAPIKey}`
  );

  return geocodeData.data;
};

export default getGeoCode;
