import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { IoLocationSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import geojson from "../data/data.geojson";
import location from "../images/map-marker-icon.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoibnVyZmF1emFubmFqaWIiLCJhIjoiY2wzamw2dnRhMTUwZDNvbGo0dHpybXh1ZyJ9.u_sE8h23Sm66KoTM-4K0HQ";

function Locations({ activeMenu }) {
  const [am, setAM] = activeMenu;
  const mapContainer = useRef();
  const [str, setStr] = useState([]);
  const [show, setShow] = useState(false);
  const [coor, setCoor] = useState([103.854, 1.2864]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: coor,
      zoom: 15, // Default Zoom
    });

    map.on("load", () => {
      map.loadImage(location, (error, image) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage("img", image);
        map.addSource("locations", {
          type: "geojson",
          data: geojson,
        });
        map.addLayer({
          id: "dots",
          type: "symbol",
          source: "locations",
          layout: {
            "text-field": ["get", "title"],
            "text-anchor": "left",
            "icon-image": "img", // Reference to image
            "icon-size": 0.25,
            "text-size": 13,
          },
          paint: {
            "text-color": "white",
            "text-halo-color": "black",
            "text-halo-width": 2,
          },
        });
        map.on("click", "dots", (e) => {
          setShow(true);
          setCoor(e.features[0].geometry.coordinates);
          setStr(e.features[0].properties);
          setAM(e.features[0].properties.title);
          map.zoomTo(17, { duration: 1000 }); //Start Zooming to 17
        });
      });
    });
  });

  return (
    <div>
      {show ? (
        <div className="absolute z-10 bg-[#313541] w-72 h-[85.8vh] right-0">
          <img src={str.image} alt="" className="h-40 w-full"></img>
          <p className="py-2 bg-[#72CDD2] text-left text-white font-semibold px-6">
            {str.title}
          </p>
          <p className="text-xs text-left text-gray-300 px-6 py-6">
            {str.description}
          </p>
          <div className="flex text-xs text-gray-300 px-6 py-2 ">
            <IoLocationSharp
              size={13}
              className="text-[#72CDD2] mt-[1.5px] mr-2"
            />
            {str.address}{" "}
          </div>
          <div className="flex text-xs text-gray-300 px-6 py-2 ">
            <FaGlobeAmericas
              size={12}
              className="text-[#92D72E] mt-[1.5px] mr-2"
            />
            {str.website}{" "}
          </div>
        </div>
      ) : null}
      <div ref={mapContainer} className="h-[85.8vh] w-full" />
    </div>
  );
}

export default Locations;
