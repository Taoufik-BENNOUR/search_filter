import React from 'react'

const Table = ({users}) => {
  return (
    <table>
        <tbody>
                <tr>
                    <th>email</th>
                    <th>name</th>
                    <th>username</th>
                </tr>
                {users.map((user)=>
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                <td>{user.email}</td>
                </tr>)}
        </tbody>
    </table>
  )
}

export default Table