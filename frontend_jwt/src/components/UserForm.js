import React, { useState } from "react";

export default function UserForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const fetchUser = () => {
    const userObj = {
        user: {
          username: userName,
          password: password,
        },
      };
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userObj),
      };
      fetch("http://localhost:3001/api/v1/users", configObj)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('jwt', data.jwt)
          // setUser(data.user)
        });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName, password);

    fetchUser()
    setUserName('')
    setPassword('')
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={handleUserName}
            value={userName}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div>
          <input type="submit" value="Create new User" />
        </div>
      </form>
    </div>
  );
}
