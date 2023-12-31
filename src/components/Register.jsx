import React, { useState } from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { register } from '../store/actions/authActions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert('заполните все поля');
    } else {
      const newUser = {
        email,
        password,
        password_confirm: passwordConfirm,
      };
      dispatch(register(newUser)).then(() => navigate('/register-success'));
    }
  };

  return (
    <Container>
      <h2>Register Page</h2>
      <FormControl
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
      />
      <FormControl
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <FormControl
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="confirm password"
        type="password"
      />
      <Button onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
