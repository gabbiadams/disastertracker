import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireLocationMarker from './FireLocationMarker'
import LocationInfoBox from './LocationInfoBox'


const Map = ({ eventData, center, zoom }) => {
    const[locationInfo, setLocationInfo] = useState(null)

    
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    //Google Map API
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                'AIzaSyB_eBZWEM8M5vPmLg7Qm000RdBvVr_VfMQ' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                { markers }
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

//defaults center of map to Bentonville
Map.defaultProps = {
    center: {
        lat: 36.3729,
        lng: -94.2088
    },
    zoom: 6
}

export default Map