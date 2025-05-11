import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  useEffect(() => {
    let map;
    let marker;
    let geolocationWatch;

    // Initialize the map only if container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    map = L.map(mapContainer).setView([51.505, -0.09], 13);

    // Add the tile layer with proper URL
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker
    marker = L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Your current location')
      .openPopup();

    // Request user's current location
    if (navigator.geolocation) {
      geolocationWatch = navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!map || map._container === undefined) return; // Check if map exists
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          marker.setLatLng([latitude, longitude])
               .bindPopup('Your current location')
               .openPopup();
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }

    // Click handler
    const clickHandler = (e) => {
      const { lat, lng } = e.latlng;
      marker.setLatLng([lat, lng])
           .bindPopup(`Selected location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
           .openPopup();
      map.setView([lat, lng], map.getZoom());
    };

    map.on('click', clickHandler);

    // Clean up
    return () => {
      if (map) {
        map.off('click', clickHandler);
        map.remove();
      }
      if (geolocationWatch && navigator.geolocation) {
        navigator.geolocation.clearWatch(geolocationWatch);
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default MapPage;