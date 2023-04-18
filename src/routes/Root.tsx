import { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import AddData from "./AddData";
import { Link } from "react-router-dom";

 export interface EmployeeData {
  id: number;
  name: string;
  email: string;
  address: { city: string };
  company: { name: string };
}

export default function Root() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Root</h1>
        <nav>
          <Link to="/display">Display</Link>
          <Link to="/add">Add Data</Link>
        </nav>
        <AddData data={data} setData={setData} />
        <DisplayData data={data} />
      </div>
    </>
  );
}
