import React from 'react';
import Request from '@components/Request';

function RequestsList() {
    return (
        <div>
            <Request values={{ username: 'Current User Data', desc: 'Retrieve information about the currently authenticated user.', reqUrl: 'http://localhost:4000/users/@me', reqMethod: 'GET', reqAuth: true }} />
        </div>
    );
}

export default RequestsList;