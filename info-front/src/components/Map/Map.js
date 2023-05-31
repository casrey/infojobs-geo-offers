import { Card } from "@tremor/react";
import React, { useRef, useEffect, useState } from "react";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

import { Map as MapReact, Source, Layer } from "react-map-gl";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = ({ geojson }) => {
  let mapRef;

  return (
    <Card className="h-full">
      {geojson?.features.length > 0 ? (
        <MapReact
          initialViewState={{
            latitude: 40.463667,
            longitude: -3.74922,
            zoom: 5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          interactiveLayerIds={[clusterLayer.city]}
          ref={mapRef}
        >
          <Source
            id="offersForCity"
            type="geojson"
            data={geojson}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </MapReact>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Map;
