import React from "react";

const UsersItem = ({user}) => {
    return (
        <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersList = ({users})=>{
    return(
        <table>
             <thead>
                    <tr>
                        <th> First name</th>
                        <th> Last name </th>
                        <th> Email </th>
                    </tr>
             </thead>
             <tbody>
                {users.map((user) => < UsersItem user={user} />)}
             </tbody>
        </table>
    )
}
export default UsersList