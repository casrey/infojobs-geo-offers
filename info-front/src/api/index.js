console.log(process.env);
export const OFFERS_QUERY = (searchParam, debouncedFilter) => ({
  queryKey: ["offers"],
  queryFn: async () => {
    const data = await fetch(`/offer?country=${searchParam}`, {
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    return data;
  },
  enabled: !!searchParam && Boolean(debouncedFilter),
});

export const GET_PLACE_COORD = (city, zoom) => ({
  queryKey: ["get_coordinates"],
  queryFn: async () => {
    const data = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/'${city}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
    return data;
  }

});