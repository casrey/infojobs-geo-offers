import React from "react";

import { Grid, Col } from "@tremor/react";

import Map from "../../components/Map/Map";
import RightContainer from "../RightContainer/RightContainer";
import Search from "../../components/Search/Search";
import AdvancedFilters from "../../components/AdvancedFilters/AdvancedFilters";

import { OFFERS_QUERY, GET_PLACE_COORD_QUERY } from "../../api";
import getCityJobsFrecuency from "../../utils";

const Layout = () => {
  const [searchParam, setSearchParam] = React.useState('');

  const { refetch, data, isSuccess } = OFFERS_QUERY(searchParam, setSearchParam);
  // const { data } = GET_PLACE_COORD_QUERY('Colombia', 3);
  if (data && isSuccess) {
    console.log(data);
    console.log(getCityJobsFrecuency(data.offers), ' JSON CON CANTIDAD POR CIUDAD');
    const frecuencyCityJobs = getCityJobsFrecuency(data.offers);
    // console.log(data.features[0].center, ' HOLAAA');
  }


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
