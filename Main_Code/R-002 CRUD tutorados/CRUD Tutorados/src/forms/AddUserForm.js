import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", lastname: "", email: "", phone: "" };
  const [user, setUser] = useState(initialFormState);

  // should this be a different var type? table is not updating with new additions
  // update state based on event in input
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        // default event for form is submit (preventing with a check)
        event.preventDefault();
        if (!user.name || !user.lastname || !user.email || !user.phone) {
          alert("Complete todos los campos, por favor!");
          return;
        } else {
          props.addUser(user);
          setUser(initialFormState);
        }
      }}
    >
      <label>Nombres</label>
      <input
        type="text"
        name="name"
        placeholder="Ingrese nombres..."
        value={user.name}
        onChange={inputHandler}
      />
      <label>Apellidos</label>
      <input
        type="text"
        name="lastname"
        placeholder="Ingrese apellidos..."
        value={user.lastname}
        onChange={inputHandler}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Ingrese email..."
        value={user.email}
        onChange={inputHandler}
      />
      <label>Celular</label>
      <input
        type="text"
        name="phone"
        placeholder="Ingrese número de celular..."
        value={user.phone}
        onChange={inputHandler}
      />
      <button className="btn btn-success">Añadir nuevo tutorado</button>
    </form>
  );
};

export default AddUserForm;
