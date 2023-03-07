import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
interface MapProps {
    wrapperClassNames?: string
}


const Map: FC<MapProps> = ({ wrapperClassNames }) => {
    return (
        <div className={`${wrapperClassNames} map border border-rose-500 h-[626px]`}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '626px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map