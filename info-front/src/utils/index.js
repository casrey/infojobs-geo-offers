import cities from "../fixtures/cities.json";

export let geojson = {
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:OGC:1.3:CRS84"
      }
    },
    features: []
}

/* export const getCityJobsFrecuency2 = (offers) => {
  useEffectz(() => {
    const fetchCoordinates = async () => {
      const cities = offers.map((job) => job.city);
      const promises = cities.map((city) => getCoord(city));
      await Promise.all(promises);
    };

    fetchCoordinates();
  }, [offers]);

  // Rest of your code
}; */

const getCoord = (cityToSearch) => {

  const citiesJson = cities.filter((city) => {
    if(city.properties.city === cityToSearch ){
      geojson.features.push(city);
      return city
    }
    return
  })
  console.log(citiesJson);

};
  


export const getCityJobsFrecuency = (offers) => {

  const cities = offers.map((job) => job.city);
  let cityCount = {};

  cities.forEach((city) => {
    if (cityCount[city]) {
      getCoord(city)

      cityCount[city]++;
    } else {
      cityCount[city] = 1;
    }
  });

  const jsonResult = Object.keys(cityCount).map((city) => {
    return {
    properties : {
      city: city,
      mag: cityCount[city]
    }
    };
  });

  const jsonString = JSON.stringify(jsonResult);
  return jsonString;
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
}