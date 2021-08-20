import React, { useState, Fragment } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUsersForm";

// Create initial table with static/pre-defined users
// need to make this table available to other portions
// so CRUD is complete with adding/editing/deleting users
const App = () => {
  const usersData = [
    { id: 1, name: "Edwin", lastname: "Carrasco Poblete", email: "edwin.carrasco@unsaac.edu.pe", phone: "987241193" },
    { id: 2, name: "Emilio", lastname: "Palomino Olivera", email: "emilio.palomino@unsaac.edu.pe", phone: "978549324" },
    { id: 3, name: "Ivan Cesar", lastname: "Medrano Valencia", email: "ivan.medrano@unsaac.edu.pe", phone: "963459712" },
    { id: 4, name: "Rony", lastname: "Villafuerte Serna", email: "rony.villafuerte@unsaac.edu.pe", phone: "925675400" }
  ];

  // sets initial form state - "blank slate"
  const initialFormState = { id: null, name: "", lastname: "", email: "", phone: "" };

  // set state Hooks syntax - you define the two params in [x, y].
  // useState comes from React import for handling state
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // increment the ID of the new user manually - function will
  // take a user object as a parameter & add them to the users array of objects
  // the ...users code ensures that all the previous users remain in the array
  const addUser = (user) => {
    user.id = user.length + 4;
    setUsers([...users, user]);
  };

  // pass deleteUser through props to UserTable
  // use setter to take ID of user & filter them out of the users array
  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, lastname: user.lastname, email: user.email, phone: user.phone });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // deleteUser() fixed -> had to add function to <EditUserForm>
  return (
    <div className="container-fluid">
      <h1>Docentes Tutores</h1>
      <div className="row">
        <div className="col-md-4">
          {editing ? (
            <Fragment>
              <h2>Editar tutor</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Añadir Tutor</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="col-md-8">
          <h2>Lista de tutores</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
