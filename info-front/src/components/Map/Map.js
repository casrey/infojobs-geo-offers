import { Card } from "@tremor/react";
import React from "react";
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

  const onClick = event => {

    const feature = event.features[0];
    console.log(feature, ' soy feature');
    const clusterId = feature.properties.cluster_id;
    console.log(clusterId, ' soy clusterId');

    const mapboxSource = mapRef.current.getSource('earthquakes');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500
      });
    });
  };

  return (
    <Card className="h-full">
        <MapReact
          initialViewState={{
            latitude: 40.463667,
            longitude: -3.74922,
            zoom: 5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          interactiveLayerIds={[clusterLayer.id]}
          ref={mapRef}
          // onClick={onClick}
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
    </Card>
  );
};

export default Map;
