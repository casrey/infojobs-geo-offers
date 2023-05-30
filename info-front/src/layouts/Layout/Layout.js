import React from "react";

import { Grid, Col } from "@tremor/react";
import { useQuery } from "@tanstack/react-query";

import useDebounce from "../../hooks/useDebounce";
import Map from "../../components/Map/Map";
import RightContainer from "../RightContainer/RightContainer";
import Search from "../../components/Search/Search";
import AdvancedFilters from "../../components/AdvancedFilters/AdvancedFilters";

import { OFFERS_QUERY, GET_PLACE_COORD } from "../../api";

const Layout = () => {
  const [searchParam, setSearchParam] = React.useState();
  const debouncedFilter = useDebounce(searchParam, 500);

  const offers = useQuery(OFFERS_QUERY(searchParam, debouncedFilter));
  const getCoord = useQuery(GET_PLACE_COORD('Colombia', 3));

  console.log({ offers });
  console.log({ getCoord });
  console.log(' CROOOD: ', getCoord.features);


  return (
    <Grid numCols={1} numColsSm={2} numColsLg={4} className="gap-2 h-full">
      <Col numColSpan={4} numColSpanLg={4}>
        <Search setSearchParam={setSearchParam} />
      </Col>
      <Col numColSpan={4} numColSpanLg={4}>
        <AdvancedFilters />
      </Col>

      <Col numColSpan={3} numColSpanLg={3}>
        <Map />
      </Col>

      <Col numColSpan={1} numColSpanLg={1}>
        <RightContainer />
      </Col>
    </Grid>
  );
};

export default Layout;
