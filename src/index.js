import React from 'react'
import device from 'current-device'

const withBoundry = (Component) => {
    return class extends React.Component {

        render() {

            return (
                <Component {...this.props} device={device.type}/>
            )
        }
    }
}

export default withBoundry