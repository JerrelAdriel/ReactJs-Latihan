import { useState, useEffect } from "react";
import {Button, Form} from 'react-bootstrap';

async function doLogin({ email, password }) {
  const response = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  function handleSubmit(e) {
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
  }

  function handleLogout(e) {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    
  }

  return (
    <div >
        {!isLoggedIn ? (
          <Form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button type="submit">Submit</Button>
          </Form>
        ) : (
          <input type="submit" value="Logout" onClick={handleLogout} />
        )}

    </div>
  );
}

export default Login;
