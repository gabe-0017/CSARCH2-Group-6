import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function PhilippineMap({ events, selectedEvent, onSelectEvent }) {
  const center = [12.8797, 121.774];
  const zoom = 6;

  return (
    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => (
          <Marker
            key={`${event.year}-${event.title}`}
            position={[event.lat, event.lng]}
            eventHandlers={{
              click: () => onSelectEvent(event),
            }}
          >
            <Popup>
              <strong>{event.year}</strong> — {event.title}
            </Popup>
          </Marker>
        ))}
        <MapController center={center} zoom={zoom} />
      </MapContainer>
    </div>
  );
}
