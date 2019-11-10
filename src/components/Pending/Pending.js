import React, {Fragment} from 'react'
import './Pending.css'

class Pending extends React.Component{
    render() {
        return(
            <Fragment className="Pending">
                <div className="loader">Loading...</div>
            </Fragment>
        )
    }
}

export default Pending;