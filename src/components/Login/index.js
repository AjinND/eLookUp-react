import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./index.css";

const colors = [
  "#01c8f7",
  "#01f7d7",
  "#1709fa",
  "#b100f6",
  "#4be1ec",
  "#cb5eee",
];

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container custom-style">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <lord-icon
          src="https://cdn.lordicon.com/ynooheet.json"
          trigger="hover"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card style={{ width: "25rem", border: "1px solid " + borderColor }}>
          <Card.Body>
            <Card.Title className="text-center custom-text">Login</Card.Title>
            <Form>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formEmail"
              >
                <Form.Label className="cutom-position">
                  <lord-icon
                    src="https://cdn.lordicon.com/acydszgh.json"
                    trigger="hover"
                    style={{ width: "40px", height: "35px" }}
                  ></lord-icon>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formPassword"
              >
                <Form.Label className="cutom-position">
                  {" "}
                  <lord-icon
                    src="https://cdn.lordicon.com/vivtfghy.json"
                    trigger="hover"
                    style={{ width: "40px", height: "35px" }}
                  ></lord-icon>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mb-3 d-flex justify-content-center"
                style={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #4be1ec, #cb5eee)",
                }}
              >
                Login
              </Button>
            </Form>
            <Card.Text className="custom-text-position">
              New to Here?&nbsp;
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
