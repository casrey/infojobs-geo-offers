export const serializeAdvanceFilters = (advancedFilters) =>
  Object.keys(advancedFilters)
    .filter((value) => !!advancedFilters[value])
    .map((key) => key + "=" + advancedFilters[key])
    .join("&");
