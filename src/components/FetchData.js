import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import FormData from "./FormData";

const FetchData = () => {
  const [userData, setUserData] = useState([]);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://mocki.io/v1/5371b319-b8b7-4765-ba00-79e6752f98c3")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("userData=>", userData);

  return (
    <div>
      {!isForm && <button className="btn" onClick={() => setIsForm(true)}>Submit Data</button>}{" "}
      {isForm && <FormData />}
      {!isForm && (
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Update</th>
          </tr>

          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name + " " + user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default FetchData;
