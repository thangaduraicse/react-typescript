import * as _ from "underscore";
import "whatwg-fetch";
import {Zipcodes, Addr} from "./model";
const constant = require("./constants");

export type fetchZipcodeRequest = () => ({
  type: string
});

export const fetchZipcodeRequest: fetchZipcodeRequest = () => ({
  type: constant.FETCH_ZIPCODE_REQUEST
});

export type fetchZipcodeSuccess = (addresses: Zipcodes) => ({
  type: string,
  addresses
});

export const fetchZipcodeSuccess = (addresses) => ({
  type: constant.FETCH_ZIPCODE_SUCCESS,
  addresses
});

export type fetchZipcodeFailure = (message: string) => ({
  type: string,
  message
});

export const fetchZipcodeFailure: fetchZipcodeFailure = (message) => ({
  type: constant.FETCH_ZIPCODE_FAILURE,
  message
});

export type fetchDataFromGoogleAPI = (zipcode: string) => (dispatch: any) => Promise<any>

export const fetchDataFromGoogleAPI: fetchDataFromGoogleAPI = (zipcode) => {
  return dispatch => {
    dispatch(fetchZipcodeRequest);
    return fetch("http://maps.googleapis.com/maps/api/geocode/" +
      "json?sensor=true&components=postal_code:"+zipcode)
      .then(res => res.json())
      .then(json => {
        let chkResultLengthEqZero = 0;
        if(json.status === "ZERO_RESULTS" ||
          json.results.length === chkResultLengthEqZero) {
          dispatch(fetchZipcodeFailure("Please enter the valid " +
          "zipcode!"));
        } else {
          let addrJson, addressDetails = [];
          const addressComponents = _.pluck(json.results, "address_components");
          _.each(addressComponents, function(address) {
            addrJson = {
              zipcode: zipcode,
              neighborhood: "",
              locality: "",
              city: "",
              state: "",
              country: ""
            };
            if(address[0].long_name === zipcode) {
              _.each(address, function(addr: Addr) {
                if(_.contains(addr.types, "neighborhood"))
                  addrJson.neighborhood = addr.long_name;
                if(_.contains(addr.types, "locality"))
                  addrJson.locality = addr.long_name;
                if(_.contains(addr.types, "administrative_area_level_2"))
                  addrJson.city = addr.long_name;
                if(_.contains(addr.types, "administrative_area_level_1"))
                  addrJson.state = addr.long_name;
                if(_.contains(addr.types, "country"))
                  addrJson.country = addr.long_name;
              });
              addressDetails = [...addressDetails, addrJson];
            }
          });
          dispatch(fetchZipcodeSuccess(addressDetails));
        }
      })
      .catch(ex => {
        console.warn("Exception", ex);
        dispatch(fetchZipcodeFailure("Error in getting data from " +
          "google geocode api!"));
      });
  };
}

export type updateSearchHistory = (addressedIndex: string) => ({
  type: string,
  addressedIndex
});

export const updateSearchHistory = (addressedIndex) => ({
  type: constant.UPDATE_SEARCH_HISTORY,
  index: addressedIndex
});
