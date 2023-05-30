import { useState } from "react";

export const getCityJobsFrecuency = (offers) => {
  const cities = offers.map((job) => job.city);
  let cityCount = {};

  cities.forEach((city) => {
    if (cityCount[city]) {
      cityCount[city]++;
    } else {
      cityCount[city] = 1;
    }
  });

  const jsonResult = {
    cityCount: cityCount,
  };

  const jsonString = JSON.stringify(jsonResult);
  return jsonString;
};

export const CreateFeature = (json) => {
  const [city, setCity] = useState("");
  const [jsonData, setJsonData] = useState({
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
    features: [
      {
        type: "Feature",
        properties: { ciudad: "Colombia", frec: 2.3 },
        geometry: { type: "Point", coordinates: [-151.5129, 63.1016, 0.0] },
      },
    ],
  });

  const createNewFeature = () => {
    const newFeature = {
      type: "Feature",
      properties: { ciudad: city, frec: 0 },
      geometry: { type: "Point", coordinates: [0, 0, 0] },
    };

    const updatedJsonData = {
      ...jsonData,
      features: [...jsonData.features, newFeature],
    };

    setJsonData(updatedJsonData);
    setCity("");
  };
};

export const serializeAdvanceFilters = (advancedFilters) =>
  Object.keys(advancedFilters)
    .filter((value) => {
      if (typeof advancedFilters[value] === "number") {
        return true;
      }
      if (typeof advancedFilters[value] === "string") {
        console.log(value, advancedFilters[value]);
        return true;
      }
      return false;
    })
    .map((key) => key + "=" + advancedFilters[key])
    .join("&");

export const formatMoney = (number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
