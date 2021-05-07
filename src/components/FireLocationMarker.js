import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

// iconify fire location icon 

const FireLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="fire-location-icon" />
        </div>
    )
}

export default FireLocationMarker