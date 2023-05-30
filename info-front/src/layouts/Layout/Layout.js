import React from "react";

import { Grid, Col } from "@tremor/react";

import Map from "../../components/Map/Map";
import OffersTable from "../OffersTable/OffersTable";
import AdvancedFilters from "../../components/AdvancedFilters/AdvancedFilters";

import { OFFERS_QUERY , GET_PLACE_COORD_QUERY } from "../../api";
import { getCityJobsFrecuency, serializeAdvanceFilters,  getCitiesFromData, getCityJobsFrecuency2, GetCityJobsFrecuency2} from "../../utils";

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

  //const { data } = GET_PLACE_COORD_QUERY('Colombia', 3);

    // const { data } = GET_PLACE_COORD_QUERY('Colombia', 3);
  if (data) {
    
    //console.log(data.features[0].center, ' HOLAAA');

    console.log(getCityJobsFrecuency(data.offers), ' JSON CON CANTIDAD POR CIUDAD');

    //const cities = getCitiesFromData(getCityJobsFrecuency(data.offers));
    //console.log(cities);
    // const frecuencyCityJobs = getCityJobsFrecuency(data.offers);
    // console.log(data.features[0].center, ' HOLAAA');
  }

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
        />
      </Col>

      <Col numColSpan={1} numColsSm={1} numColSpanLg={3}>
        <Map />
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
