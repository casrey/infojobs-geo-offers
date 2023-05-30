import { Text } from "@tremor/react";
import Slider from "@mui/material/Slider";

import { formatMoney } from "../../utils";

const SliderFilter = ({ advancedFilters, setAdvancedFilters }) => {
  function valuetext(value) {
    return `$${value}`;
  }

  function valueLabelFormat(value: number) {
    return `${formatMoney(value)}`;
  }

  return (
    <>
      <Text>Selecciona el rango salarial</Text>
      <Slider
        getAriaLabel={() => "Rango Salarial"}
        value={[advancedFilters.salaryMin, advancedFilters.salaryMax]}
        onChange={(event, val) => {
          setAdvancedFilters((prev) => ({
            ...prev,
            salaryMin: val[0],
            salaryMax: val[1],
          }));
        }}
        marks
        step={10_000}
        min={0}
        max={200_000}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
      />
      <Text>{`${formatMoney(advancedFilters.salaryMin)} - ${formatMoney(
        advancedFilters.salaryMax
      )}`}</Text>
    </>
  );
};

export default SliderFilter;
