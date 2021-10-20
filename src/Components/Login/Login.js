import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleGoogleSignIn, setEmail, setName, setPassword, handlePasswordSignUp, handlePasswordSignIn, error} = useAuth();
    const [createAccount, setCreateAccount] = useState(true);
    const handleCreateAccount = () => {
        setCreateAccount(!createAccount);
        console.log(createAccount);
    }
    const handleEmailInput = (e) => {
        const userEmail = (e.target.value);
        setEmail(userEmail);
    }
    const handleNameInput = (e) => {
        const userName = (e.target.value);
        setName(userName);
    }
    const handlePasswordInput = (e) => {
        const userPassword = (e.target.value);
        setPassword(userPassword);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(createAccount){
            handlePasswordSignIn();
        }
        else{
            handlePasswordSignUp();
        }
    }

    return (
        <section>
            <div className="container">
                <div className="login-heading">
                    <h2 className="section-heading fw-bold text-dark">{createAccount ? <span>Login</span> : 
                    <span>Register</span>} to <span className="red-text">Heart Care</span></h2>
                </div>
                <div className="container login-methods d-flex align-items-top">
                <div className="login-form w-50">
                <Form onSubmit={handleOnSubmit}>
                    {
                        !createAccount && <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNameInput} type="text" placeholder="Enter name" />
                    </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleCreateAccount} className="text-start" type="checkbox" label="Create new acccount?" />
                    </Form.Group>
                    <div className="submit-button text-start">
                    <Button className="red-btn btn mt-4" variant="primary" type="submit">
                        {
                            createAccount ? <span>Login</span> : <span>Register</span>
                        }
                    </Button>
                    <div className="error-message">
                        <h5 className="mt-4 red-text">{error}</h5>
                    </div>
                    </div>
                </Form>
                </div>
                <div className="login-buttons w-50">
                    <h5 className="text-dark text-uppercase mb-3">Or Login With</h5>
                <button className="btn red-btn me-2" onClick={handleGoogleSignIn}>google</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Login;