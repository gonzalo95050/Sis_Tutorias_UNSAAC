import React from "react";

const UserTable = (props) => (
  <table cellspacing="100" cellpadding="10">
    <thead>
      <tr>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Email</th>
        <th>Celular</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Users....</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
