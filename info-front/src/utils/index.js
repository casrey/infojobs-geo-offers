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
  geojson.features = citiesWithGeoData;
  return geojson;
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

export const serializeAdvanceFilters = (advancedFilters) =>
  Object.keys(advancedFilters)
    .filter(
      (value) =>
        typeof advancedFilters[value] === "number" ||
        typeof advancedFilters[value] === "string"
    )
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

export const formatCityKey = (cityNotFormattedName) => {
  return cityNotFormattedName.split(" ").join("-").toLowerCase();
};
