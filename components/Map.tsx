import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CircleMarks from './CircleMarks';

const canadaLineToYVR = [
    [49.2859, -123.1116], // Waterfront
    [49.2829, -123.1192], // Vancouver City Centre
    [49.2745, -123.1217], // Yaletown-Roundhouse
    [49.2675, -123.1149], // Olympic Village
    [49.2633, -123.1146], // Broadway-City Hall
    [49.2493, -123.1161], // King Edward
    [49.2334, -123.1160], // Oakridge-41st Avenue
    [49.2265, -123.1163], // Langara-49th Avenue
    [49.2096, -123.1167], // Marine Drive
    [49.1953, -123.1261], // Bridgeport
    [49.1968, -123.1476], // Templeton
    [49.1931, -123.1579], // Sea Island Centre
    [49.1939, -123.1786], // YVR-Airport
];

const canadaLineToRichmond = [
    [49.2859, -123.1116], // Waterfront
    [49.2829, -123.1192], // Vancouver City Centre
    [49.2745, -123.1217], // Yaletown-Roundhouse
    [49.2675, -123.1149], // Olympic Village
    [49.2633, -123.1146], // Broadway-City Hall
    [49.2493, -123.1161], // King Edward
    [49.2334, -123.1160], // Oakridge-41st Avenue
    [49.2265, -123.1163], // Langara-49th Avenue
    [49.2096, -123.1167], // Marine Drive
    [49.1953, -123.1261], // Bridgeport
    [49.1837, -123.1361], // Aberdeen
    [49.1749, -123.1368], // Lansdowne
    [49.1681, -123.1369], // Richmond-Brighouse
];

const pathOptions = { color: 'red' };

const Map = () => {
    return (
        <MapContainer style={{ height: "100vh" }} center={[49.2829, -123.1192]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://github.com/dhfflqldkk/canada-line">Olivia Fong</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={pathOptions} positions={canadaLineToYVR} />
            <Polyline pathOptions={pathOptions} positions={canadaLineToRichmond} />
            <CircleMarks />
        </MapContainer>
    )
}

export default Map;
