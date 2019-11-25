import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import "mapbox-gl/dist/mapbox-gl.css";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'


import { MAP_APP_TOKEN } from '../config/constants'

const styles = {
    width: "82.3vw",
    height: "calc(100vh - 80px)",
    position: "relative"
};

const MapboxGLMap = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = MAP_APP_TOKEN;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [ -68.13231468200684, -16.4960895789825],
                zoom: 15,
                height: 500,
            });

            var draw = new MapboxDraw({
                displayControlsDefault: false,
                controls: {
                  line_string: true,
                  trash: true
                },
                styles: [
                  // ACTIVE (being drawn)
                  // line stroke
                  {
                    "id": "gl-draw-line",
                    "type": "line",
                    "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
                    "layout": {
                      "line-cap": "round",
                      "line-join": "round"
                    },
                    "paint": {
                      "line-color": "#3b9ddd",
                      "line-dasharray": [0.2, 2],
                      "line-width": 4,
                      "line-opacity": 0.7
                    }
                  },
                  // vertex point halos
                  {
                    "id": "gl-draw-polygon-and-line-vertex-halo-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                    "paint": {
                      "circle-radius": 10,
                      "circle-color": "#FFF"
                    }
                  },
                  // vertex points
                  {
                    "id": "gl-draw-polygon-and-line-vertex-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                    "paint": {
                      "circle-radius": 6,
                      "circle-color": "#3b9ddd",
                    }
                  },
                ]
              });
            
            map.addControl(draw);
            const test = () => {
                const data = draw.getAll();
                console.log(data);
            }
            map.on('draw.create', test)
            map.on("load", () => {
                setMap(map);
                map.resize();
            });

            map.on('click', (e) => {
                console.log(e);

            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} style={styles} />
};

export default MapboxGLMap;