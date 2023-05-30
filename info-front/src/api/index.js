import { useQuery } from "@tanstack/react-query";

import { serializeAdvanceFilters } from "../utils";

const rootUrl =
  process.env.NODE_ENV === "production" ? "http://api.infojobs.net/api/9/" : "";

export const OFFERS_QUERY = ({ searchParam, advancedFilters }) => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const data = await fetch(
        `${rootUrl}/offer?q=${searchParam}${
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
