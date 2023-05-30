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
};
