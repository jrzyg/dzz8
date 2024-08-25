import React from 'react';

const UserList = ({users, deleteUser}) => {

    if (users.length === 0){
        return <p>нету данных родной</p>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>

                </tr>
            </thead>
            <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))

            }
            </tbody>
        </table>
    );
};

export default UserList;