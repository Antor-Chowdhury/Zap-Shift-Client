import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Search } from "lucide-react";

// importing the leaflet css to customize the design
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  // --- bangladesh center latitude,longitude
  const position = [23.685, 90.3563];

  // --- retrieving the loader data from routes
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coordinates = [district.latitude, district.longitude];
      mapRef.current.flyTo(coordinates, 14);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto bg-white px-4 sm:px-8 lg:px-27 py-10 sm:py-14 lg:py-20 rounded-3xl mb-16 sm:mb-24 lg:mb-31">
      <div>
        <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-[56px] text-secondary mb-6 sm:mb-8 lg:mb-12.5 leading-tight">
          We are available in 64 districts
        </h2>
      </div>

      {/* Search location */}
      <form onSubmit={handleSearch}>
        <div className="w-full flex">
          <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 shadow-sm max-w-full sm:max-w-2xl lg:max-w-3xl">
            <Search className="text-gray-400 mr-2 sm:mr-3" size={18} />
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="grow bg-transparent outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400"
            />
            <button className="ml-2 sm:ml-4 bg-primary hover:bg-lime-500 hover:cursor-pointer text-black font-semibold px-4 sm:px-6 lg:px-8 py-2 rounded-full transition text-sm sm:text-base">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* map */}
      <div className="border-t border-gray-200 mt-8 sm:mt-12.5">
        <h4 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-secondary my-6 sm:my-8 lg:my-12.5">
          We deliver almost all over Bangladesh
        </h4>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-75 sm:h-105 lg:h-106.5 rounded-xl"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* marker for dynamically using the data */}
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
