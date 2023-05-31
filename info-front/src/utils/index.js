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
