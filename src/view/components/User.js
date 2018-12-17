import React from 'react';

const User = ({
    user: {
        gender,
        name: {
            first,
            last,
            email,
        },
        picture: {
            medium,
        }
    },
}) => (
    <div className="user">
        <h1>{`${first} ${last}`}</h1>
    </div>
);

export default User;