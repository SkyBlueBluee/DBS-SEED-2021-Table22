import React, { useEffect, useState } from 'react'
import { Form, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import "../../loginPageStyles.css"
import apis from "../../api/index"

const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        console.log(isLoggedIn);
        if (isLoggedIn){
            localStorage.setItem("isLoggedIn", "true");
            let { from } = location.state || { from: { pathname: "/" } };
            history.replace("/products");
        }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = await apis.signIn({ username: "username1", password: "password1" });
        setIsLoggedIn(true);
    }

    return (
        <div className="container">
            <div className="row">
                <Form onSubmit={onSubmit}>
                    <h1 className="header">Login</h1>
                    <Form.Group className="col-6 mb-4" id="usernameGroup">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your username" />
                    </Form.Group>

                    <Form.Group className="col-6 mb-4" id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <div id="buttonContainer">
                        <Button variant="primary" type="submit" id="submitButton">
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default LoginPage
