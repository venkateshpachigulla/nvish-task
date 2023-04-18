import React, { useState, useId } from "react";

const AddData = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const id = useId();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      id: id,
      name,
      email,
      address: { city },
      company: { name: companyName },
    };

    setData([...data, newUser]);
  };
  return (
    <div className="addUser">
      <h2>Add new user </h2>
      <form onSubmit={handleSubmit} className="addForm">
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter name"
            onChange={(event) => setName(event?.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event?.target.value)}
          />
        </label>
        <label>
          City:{" "}
          <input
            type="text"
            placeholder="Enter city"
            onChange={(event) => setCity(event?.target.value)}
          />
        </label>
        <label>
          Company:{" "}
          <input
            type="text"
            placeholder="Enter company"
            onChange={(event) => setCompanyName(event?.target.value)}
          />
        </label>

        <button style={{ width: "100px" }}>Add</button>
      </form>
    </div>
  );
};

export default AddData;
