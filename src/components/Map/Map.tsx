import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import  markerIcon  from "../../assets/icons/MarkerIcon.svg";
import L from 'leaflet';

interface MapProps {
    wrapperClassNames?: string
}



const MarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: ' !bg-transparent'
});



const Map: FC<MapProps> = ({ wrapperClassNames }) => {
    return (
        <div className={`${wrapperClassNames} map  overflow-hidden h-[219px] xl:h-[626px] px-5 lg:px-0`}>
            <div className='rounded-[20px] overflow-hidden w-full h-full'>
                <MapContainer center={[41.118, 29.02]} zoom={15} scrollWheelZoom={false} className='h-full'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[41.118, 29.02]} icon={MarkerIcon}>
                        <Popup>
                            Merkez Mh. Şişli - İstanbul, Turkey
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Map