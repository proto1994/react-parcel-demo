import React from 'react';
import {withRouter} from 'react-router';
const App = ({children}) => {
    return (
        <div style={{color:'red'}}>
            {children}
        </div>
    )
}

export default withRouter(App);