import { CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/mark.png" });

const redOptions = { color: 'red' };

const CircleMarks = () => {
    return (
        <>
            {/* waterfront to yvr airport */}
            <CircleMarker center={[49.2859, -123.1116]} pathOptions={redOptions} radius={15}><Popup>Waterfront Station</Popup></CircleMarker>
            <CircleMarker center={[49.2829, -123.1192]} pathOptions={redOptions} radius={15}><Popup>Vancouver City Centre Station</Popup></CircleMarker>
            <CircleMarker center={[49.2745, -123.1217]} pathOptions={redOptions} radius={15}><Popup>Yaletown-Roundhouse Station</Popup></CircleMarker>
            <CircleMarker center={[49.2675, -123.1149]} pathOptions={redOptions} radius={15}><Popup>Olympic Village Station</Popup></CircleMarker>
            <CircleMarker center={[49.2633, -123.1146]} pathOptions={redOptions} radius={15}><Popup>Broadway-City Hall Station</Popup></CircleMarker>
            <CircleMarker center={[49.2493, -123.1161]} pathOptions={redOptions} radius={15}><Popup>King Edward Station</Popup></CircleMarker>
            <CircleMarker center={[49.2334, -123.1160]} pathOptions={redOptions} radius={15}><Popup>Oakridge-41st Avenue Station</Popup></CircleMarker>
            <CircleMarker center={[49.2265, -123.1163]} pathOptions={redOptions} radius={15}><Popup>Langara-49th Avenue Station</Popup></CircleMarker>
            <CircleMarker center={[49.2096, -123.1167]} pathOptions={redOptions} radius={15}><Popup>Marine Drive Station</Popup></CircleMarker>
            <CircleMarker center={[49.1953, -123.1261]} pathOptions={redOptions} radius={15}><Popup>Bridgeport Station</Popup></CircleMarker>
            <CircleMarker center={[49.1968, -123.1476]} pathOptions={redOptions} radius={15}><Popup>Templeton Station</Popup></CircleMarker>
            <CircleMarker center={[49.1931, -123.1579]} pathOptions={redOptions} radius={15}><Popup>Sea Island Centre Station</Popup></CircleMarker>
            <CircleMarker center={[49.1939, -123.1786]} pathOptions={redOptions} radius={15}><Popup>YVR-Airport Station</Popup></CircleMarker>

            {/* waterfront to richmond brighouse */}
            <CircleMarker center={[49.1837, -123.1361]} pathOptions={redOptions} radius={15}><Popup>Aberdeen Station</Popup></CircleMarker>
            <CircleMarker center={[49.1749, -123.1368]} pathOptions={redOptions} radius={15}><Popup>Lansdowne Station</Popup></CircleMarker>
            <CircleMarker center={[49.1681, -123.1369]} pathOptions={redOptions} radius={15}><Popup>Richmond-Brighouse Station</Popup></CircleMarker>
        </>
    )
}

export default CircleMarks;
