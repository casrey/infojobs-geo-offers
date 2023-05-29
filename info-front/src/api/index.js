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
