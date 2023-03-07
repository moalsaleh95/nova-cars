import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
interface MapProps {
    wrapperClassNames?: string
}


const Map: FC<MapProps> = ({ wrapperClassNames }) => {
    return (
        <div className={`${wrapperClassNames} map rounded-[20px] overflow-hidden border border-rose-500 h-[626px]`}>
            <MapContainer center={[41.062, 28.988]} zoom={15} scrollWheelZoom={false} style={{height: '626px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.062, 28.988]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map