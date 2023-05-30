import React from "react";

import { Grid, Col } from "@tremor/react";

import Map from "../../components/Map/Map";
import RightContainer from "../RightContainer/RightContainer";
import Search from "../../components/Search/Search";
import AdvancedFilters from "../../components/AdvancedFilters/AdvancedFilters";

import { OFFERS_QUERY } from "../../api";

const Layout = () => {
  const [searchParam, setSearchParam] = React.useState('');

  const { refetch } = OFFERS_QUERY(searchParam, setSearchParam);

  return (
    <Grid numCols={1} numColsSm={2} numColsLg={4} className="gap-2 h-full">
      <Col numColSpan={4} numColSpanLg={4}>
        <Search
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          refetch={refetch}
        />
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
