import { Card, Col, Grid, Button } from "@tremor/react";
import countries from "../../fixtures/countries.json";
//import cities from "../../fixtures/cities.json";
import categories from "../../fixtures/categories.json";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import SliderFilter from "../SliderFilter/SliderFilter";
import Search from "../../components/Search/Search";

const AdvancedFilters = ({
  advancedFilters,
  setAdvancedFilters,
  searchParam,
  setSearchParam,
  isFetchingOffers,
  refetch,
}) => {
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
            field="country"
            title="Selecciona el país"
            inputPlaceholder="Busca por país"
            options={countries}
          />
        </Col>
        {/* <Col numColsSm={1} numColSpanLg={1}>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            field="city"
            title="Filtra por ciudad"
            inputPlaceholder="Busca ciudad"
            options={cities}
          />
        </Col> */}
        <Col numColsSm={1} numColSpanLg={1}>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            title="Selecciona la categoria"
            inputPlaceholder="Busca por categoria"
            field="category"
            options={categories}
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
              !!searchParam && refetch();
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
