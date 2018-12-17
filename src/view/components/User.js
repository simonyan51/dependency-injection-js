import React from 'react';
import '../../assets/styles/User.css';

const User = ({
    user: {
        gender,
        name: {
            first,
            last,
            email,
        },
        picture: {
            large,
        }
    },
}) => (
    <div className="user">
        <img src={large} alt="Avatar" className="user-img" />
        <div className="user-card-container">
            <h4><b>{`${first} ${last}`}</b></h4> 
            <p>{gender}</p> 
        </div>
    </div>
);

export default User;