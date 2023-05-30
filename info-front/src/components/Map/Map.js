import { Card } from "@tremor/react";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

import { Map as MapReact, Source, Layer } from "react-map-gl";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { geojson } from "../../utils";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  let mapRef;

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // }, []);
  console.log(geojson);

  const data = geojson;

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
      <Title>Jobs For You</Title>
      {/* <div ref={mapContainer} className="map-container" /> */}
      { geojson.features.length > 0 ? 
        <MapReact
          initialViewState={{
            latitude: 2.1744,
            longitude:41.3851,
            zoom: 1
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
            data={data}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </MapReact> : 'HOLIIII'
      } 
    </Card>
  );
};

export default Map;
