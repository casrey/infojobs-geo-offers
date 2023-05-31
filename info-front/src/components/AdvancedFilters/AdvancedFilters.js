import { Card, Col, Grid, Button } from "@tremor/react";
import cities from "../../fixtures/cities.json";
import teleworking from "../../fixtures/teleworking.json";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import SliderFilter from "../SliderFilter/SliderFilter";
import Search from "../../components/Search/Search";

import { formatCityKey } from "../../utils";

const AdvancedFilters = ({
  advancedFilters,
  setAdvancedFilters,
  searchParam,
  setSearchParam,
  isFetchingOffers,
  setGeojson,
  refetch,
}) => {
  const formatCity = ({ properties: { city } }) => {
    return { value: city, key: formatCityKey(city) };
  };

  return (
    <Card>
      <Grid nulColSpan={1} numColsSm={1} numColsLg={4} className="gap-6">
        <Col numColsSm={1} numColSpanLg={1}>
          <Search
            searchParam={searchParam}
            setSearchParam={setSearchParam}
            refetch={refetch}
          />
        </Col>
        <Col numColsSm={1} numColSpanLg={1}>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            field="city"
            title="Selecciona la ciudad"
            inputPlaceholder="Busca por ciudad"
            options={cities.map(formatCity)}
          />
        </Col>
        <Col numColsSm={1} numColSpanLg={1}>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            title="Selecciona modalidad"
            inputPlaceholder="Busca por modalidad"
            field="teleworking"
            options={teleworking}
          />
        </Col>
        <Col
          numColsSm={1}
          numColSpanLg={1}
          className="flex flex-col items-center"
        >
          <SliderFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
          />
        </Col>
        <Col className="text-center" numColsSm={4} numColSpanLg={4}>
          <Button
            onClick={() => {
              if (!!searchParam) {
                refetch();
                setGeojson();
              }
            }}
            disabled={isFetchingOffers}
          >
            Buscar
          </Button>
        </Col>
      </Grid>
    </Card>
  );
};

export default AdvancedFilters;
