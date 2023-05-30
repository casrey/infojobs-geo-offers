import { useQuery } from "@tanstack/react-query";

import { serializeAdvanceFilters } from "../utils";

export const OFFERS_QUERY = ({ searchParam, advancedFilters }) => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const data = await fetch(
        `/offer?q=${searchParam}${
          serializeAdvanceFilters(advancedFilters)
            ? `&${serializeAdvanceFilters(advancedFilters)}`
            : ""
        }`,
        {
          headers: {
            Authorization: `Basic ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      );
      return await data.json();
    },
    enabled: false,
  });
};
