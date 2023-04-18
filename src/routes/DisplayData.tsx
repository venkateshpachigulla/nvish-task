import React from "react";
import { EmployeeData } from "./Root";

const DisplayData = ({ data }) => {
  return (
    <table className="empTable">
      <tr className="empHeader">
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Company</th>
      </tr>
      {data.map(({ id, name, email, address, company }: EmployeeData) => (
        <tr key={id} className="empRecord">
          <td>{name}</td>
          <td>{email}</td>
          <td>{address?.city}</td>
          <td>{company?.name}</td>
        </tr>
      ))}
    </table>
  );
};

export default DisplayData;
