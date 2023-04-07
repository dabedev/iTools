import React, { useContext } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import AppContext from '@context/AppContext';
import useFetchMe from '@hooks/useFetchMe';

import userAvatar from '@images/avatarDefault.jpg';
import '@styles/Form.scss';
import '@styles/User.scss';

const User = () => {
    const { useAuthentication } = useContext(AppContext);
    const { authentication } = useAuthentication();
    const { username } = useParams();
    const namePicker = (payload) => payload && payload != authentication.userData.username ? payload : '@me';
    const apiUrl = 'http://localhost:4000/users/' + namePicker(username);
    const options = {
        method: 'GET',
        headers: authentication.token ? { 'Authorization': 'Bearer ' + authentication.token } : {}
    }

    const user = useFetchMe(apiUrl, options);

    return (
        <div className="user" >
            <div className="user-container">
                <h1 className="title">{user.email ? 'My Account' : `${user.username} profile`}</h1>
                <div>
                    <label htmlFor="avatar" className="label">Avatar</label>
                    <Link to="/my-account/update">
                        <section className='user-avatar'>
                            <img src={userAvatar} className={user.email ? 'h-64 w-64 my-avatar' : 'h-64 w-64'} alt={user.username} />
                        </section>
                    </Link>
                    <label htmlFor="username" className="label">Username</label>
                    <p className="value">{user.username}</p>
                    {user.email ? (<div>
                        <label htmlFor="email" className="label">Email</label>
                        <p className="value">{user.email}</p>
                    </div>) : (<></>)
                    }
                    <label htmlFor="id" className="label">ID</label>
                    <p className="value">{user.id}</p>
                </div>
                {user.email ? (<div>
                    <Link to="/user/update" className="secondary-button login-button">Update</Link>
                </div>) : (<></>)}
            </div>
        </div >
    );
}

export default User;