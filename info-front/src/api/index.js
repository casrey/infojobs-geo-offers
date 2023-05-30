import { useQuery } from "@tanstack/react-query";

export const OFFERS_QUERY = (searchParam) => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const data = await fetch(`/offer?country=${searchParam}`, {
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      return await data.json();
    },
    enabled: false,
  });
};

export const GET_PLACE_COORD_QUERY = (city, zoom) => {
  return useQuery({
    queryKey: ["get_coordinates"],
    queryFn: async () => {
      const data = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/'${city}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
      return await data.json();
    },
    enabled: !!city,
  });
}
