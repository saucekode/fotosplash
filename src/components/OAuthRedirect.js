import React from 'react'
import {Navigate} from 'react-router-dom'

const OAuthRedirect = () => {

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const token = getUrlParameter('token')

    console.log(token)

    return (
        <div>
            {!token ? <Navigate to="/profile"/> : <Navigate to="/"/>}
        </div>
    )
}

export default OAuthRedirect
