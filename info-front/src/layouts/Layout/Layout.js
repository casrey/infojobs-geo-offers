import React from "react";

import { Grid, Col } from "@tremor/react";

import Map from "../../components/Map/Map";
import OffersTable from "../OffersTable/OffersTable";
import AdvancedFilters from "../../components/AdvancedFilters/AdvancedFilters";

import { OFFERS_QUERY, GET_PLACE_COORD_QUERY } from "../../api";
import {
  getCityJobsFrecuency,
  serializeAdvanceFilters,
  getCitiesFromData,
  getCityJobsFrecuency2,
  GetCityJobsFrecuency2,
} from "../../utils";
import { geojson as defaultGeojson } from "../../utils";

const Layout = () => {
  const [searchParam, setSearchParam] = React.useState("");
  const [advancedFilters, setAdvancedFilters] = React.useState({
    country: null,
    salaryMin: 0,
    salaryMax: 200_000,
    category: null,
    city: null,
    teleworking: null,
  });

  const {
    refetch,
    data,
    isSuccess: isOffersSuccess,
    isInitialLoading: isInitialOffersLoading,
    isFetching: isFetchingOffers,
    status: offerStatus,
  } = OFFERS_QUERY({ searchParam, advancedFilters });

  const [geojson, setGeojson] = React.useState(defaultGeojson);

  React.useEffect(() => {
    console.log({data})
    if (data?.offers?.length > 0) {
      setGeojson(getCityJobsFrecuency(data.offers));
    }
  }, [data]);

  return (
    <Grid nulColSpan={1} numColsSm={1} numColsLg={5} className="gap-2 h-full">
      <Col numColsSm={1} numColSpanLg={5}>
        <AdvancedFilters
          advancedFilters={advancedFilters}
          setAdvancedFilters={setAdvancedFilters}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          refetch={refetch}
          isFetchingOffers={isFetchingOffers}
          setGeojson={setGeojson}
        />
      </Col>

      <Col numColSpan={1} numColsSm={1} numColSpanLg={3}>
        {console.log({geojson})}
        <Map geojson={geojson} />
      </Col>
      <Col numColSpan={1} numColsSm={1} numColSpanLg={2}>
        <OffersTable
          offers={data?.offers}
          isLoading={isInitialOffersLoading}
          isSuccess={isOffersSuccess}
          offerStatus={offerStatus}
          isFetchingOffers={isFetchingOffers}
        />
      </Col>
    </Grid>
  );
};

export default Layout;
