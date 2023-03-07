import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
interface MapProps {
    wrapperClassNames?: string
}


const Map: FC<MapProps> = ({ wrapperClassNames }) => {
    return (
        <div className={`${wrapperClassNames} map  overflow-hidden h-[219px] xl:h-[626px] px-5 lg:px-0`}>
            <div className='rounded-[20px] overflow-hidden w-full h-full'>
                <MapContainer center={[41.062, 28.988]} zoom={15} scrollWheelZoom={false} className='h-full'>
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
        </div>
    )
}

export default Map