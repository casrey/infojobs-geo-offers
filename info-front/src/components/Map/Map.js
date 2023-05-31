import { Card } from "@tremor/react";
import React, { useRef, useEffect, useState } from "react";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

import { geojson } from "../../utils";

import { Map as MapReact, Source, Layer } from "react-map-gl";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  let mapRef;

 

  // const onClick = (event) => {
  //   const feature = event.features[0];
  //   const clustercity = feature.properties.cluster_city;

  //   const mapboxSource = mapRef.current.getSource("earthquakes");

  //   mapboxSource.getClusterExpansionZoom(clustercity, (err, zoom) => {
  //     if (err) {
  //       return;
  //     }

  //     mapRef.current.easeTo({
  //       center: feature.geometry.coordinates,
  //       zoom,
  //       duration: 500,
  //     });
  //   });
  // };

  return (
    <Card className="h-full">
      {/* <div ref={mapContainer} className="map-container" /> */}
       { geojson.features.length > 0 ? <MapReact
          initialViewState={{
            latitude: 40.463667,
            longitude: -3.74922,
            zoom: 5
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          interactiveLayercitys={[clusterLayer.city]}
          // onClick={onClick}
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
        </MapReact> : ''}
    </Card>
  );
};

export default Map;
