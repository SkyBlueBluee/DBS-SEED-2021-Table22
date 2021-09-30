import React from 'react'
import { Form, Button } from "react-bootstrap";

import "../../loginPageStyles.css"

const LoginPage = () => {

    const onSubmit = "Does Nothing"

    return (
        <div class="container">
            <div class="row">
                <Form>
                    <h1 class="header">Login</h1>
                    <Form.Group class="col-6 mb-4" id="usernameGroup">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your username"/>
                    </Form.Group>

                    <Form.Group class="col-6 mb-4" id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
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
