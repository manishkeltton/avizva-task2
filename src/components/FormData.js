import React, { useState } from "react"
import axios from "axios";

import "./Form.css";

const FormData = () => {
  const [initVal, setInitVal] = useState({
    firtname: "",
    lastname: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitVal({ ...initVal, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = JSON.stringify(initVal);
      console.log("submit data =>",data);
      axios.post("https://mocki.io/v1/5371b319-b8b7-4765-ba00-79e6752f98c3", data)
       .then(response => 
          console.log("response =>", response)
        )
        .catch(error => console.log(error))

        setInitVal({});
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              className="firstname"
              value={initVal.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              className="lastname"
              value={initVal.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="email"
              value={initVal.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Mobile No.</label>
            <input
              type="number"
              name="number"
              className="number"
              value={initVal.number}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="form-btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormData;
