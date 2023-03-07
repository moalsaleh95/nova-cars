import React, { FC } from 'react'

interface MapProps {
    wrapperClassNames?: string
}


const Map: FC<MapProps> = ({wrapperClassNames}) => {
  return (
    <div className={`${wrapperClassNames} border border-rose-500`}>Map</div>
  )
}

export default Map