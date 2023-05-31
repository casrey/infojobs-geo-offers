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
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        }
      );
      return await data.json();
    },
    enabled: false,
  });
};
