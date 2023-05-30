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
