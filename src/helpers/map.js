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

const MapboxGLMap = ({ createPath, tab, routes, coordinates, pathId, lat, lng, userId }) => {

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = MAP_APP_TOKEN;
    const addRoute2 = (coords) => {
      // check if the route is already loaded
      if (map.getSource('route')) {
        map.removeLayer('route')
        map.removeSource('route')
      }
      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": coords
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#3b9ddd",
          "line-width": 8,
          "line-opacity": 0.8
        }
      });
    }
    const addPoint2 = (lat, lng) => {
      if (map.getSource('point')) {
        map.removeLayer('point')
        map.removeSource('point')
      } 
      map.addSource('point', {
        "type": "geojson",
        "data": {
          "type": "Point",
          "coordinates": [lng, lat],
          "properties": {
            "title": "Mapbox DC",
            "marker-symbol": "monument"
          }
        },
      });
      map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
          "circle-radius": 10,
          "circle-color": "#FF5733"
        },
      })
    }
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-68.13231468200684, -16.4960895789825],
        zoom: 15,
        height: 500,
      });

      if (tab === 'CREATE_ROUTE') {
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

        const getMatch = (e) => {
          var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + e + '?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
          var req = new XMLHttpRequest();
          req.responseType = 'json';
          req.open('GET', url, true);
          req.onload = () => {
            var jsonResponse = req.response;
            // add results to info box
            var coords = jsonResponse.routes[0].geometry.coordinates;

            createPath(coords);
          };
          req.send();
        }

        const createRoute = () => {
          const data = draw.getAll();
          let lastFeature = data.features.length - 1;
          let coords = data.features[lastFeature].geometry.coordinates;
          getMatch(coords.join(';'));
        }

        const deleteRoutes = () => {
          draw.deleteAll().getAll();
        }


        map.on('draw.create', createRoute);
        map.on('draw.delete', deleteRoutes)

      }


      const addRoute = (coords) => {
        // check if the route is already loaded
        if (map.getSource('route')) {
          map.removeLayer('route')
          map.removeSource('route')
        } else {
          map.addLayer({
            "id": "route",
            "type": "line",
            "source": {
              "type": "geojson",
              "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "LineString",
                  "coordinates": coords
                }
              }
            },
            "layout": {
              "line-join": "round",
              "line-cap": "round"
            },
            "paint": {
              "line-color": "#3b9ddd",
              "line-width": 8,
              "line-opacity": 0.8
            }
          });
        };
      }

      const addPoint = (lat, lng) => {
        map.addSource('point', {
          "type": "geojson",
          "data": {
            "type": "Point",
            "coordinates": [lng, lat],
            "properties": {
              "title": "Mapbox DC",
              "marker-symbol": "monument"
            }
          },
        });
        map.addLayer({
          "id": "point",
          "source": "point",
          "type": "circle",
          "paint": {
            "circle-radius": 10,
            "circle-color": "#FF5733"
          },
        })
      }


      map.on("load", () => {
        setMap(map);
        map.resize();
        if (tab === 'MAP') {
          addRoute(coordinates);
          addPoint(lat, lng);
        }
      });

      map.on('click', (e) => {
        //console.log(e);
      });
      //map.remove();
    };
    if (!map) {
      initializeMap({ setMap, mapContainer });
    } else {
      if (tab === 'MAP') {
        addRoute2(coordinates);
        addPoint2(lat, lng)
      }
    }
    return () => {
    }
  }, [map, tab, pathId, lat, lng]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />
};

export default MapboxGLMap;