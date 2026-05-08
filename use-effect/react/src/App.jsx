import React, { useState, useEffect } from "react";

const App = () => {

  // state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // input change handle
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // useEffect
  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted", formData);

    alert("Form Submitted Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label>Name</label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email</label>
          <br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password</label>
          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

      <hr />

      <h2>Live Data</h2>

      <p>
        <strong>Name:</strong> {formData.name}
      </p>

      <p>
        <strong>Email:</strong> {formData.email}
      </p>

      <p>
        <strong>Password:</strong> {formData.password}
      </p>

    </div>
  );
};

export default App;