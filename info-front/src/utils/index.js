import cities from "../fixtures/cities.json";

export let geojson = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84",
    },
  },
  features: [],
};

export const getCityJobsFrecuency = (offers) => {
  
  const cityOffers = offers?.map((job) => job.city);
  const citiesWithGeoData = cityOffers.map(getCoord);

  console.log({ citiesWithGeoData });
};

const getCoord = (cityToSearch) => {
  const citiesJson = cities.find(
    (city) => city.properties.city === cityToSearch
  );
  if (!citiesJson) {
    return { properties: { city: cityToSearch } };
  }
  return citiesJson;
};

export const getCitiesFromData = (data) => {
  const cityCount = data.cityCount;
  const cities = Object.keys(cityCount);

  return cities;
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

export const formatMoney = (number) => {
  if (isNaN(Number(number))) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};
