// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email === formData.email && user?.password === formData.password) {
      localStorage.setItem('auth', true);
      alert('Login realizado com sucesso!');
      navigate('/');
    } else {
      alert('Email ou senha inválidos.');
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar</h2>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          required
        />
        <label>Senha</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
          required
        />
        <button type="submit" className="login-btn">Entrar</button>
        <p className="signup-link">
          Não tem cadastro? <a href="/register">Cadastre-se</a>
        </p>
        <div className="social-login">
          <button type="button" className="google-btn">Entrar com Google</button>
          <button type="button" className="facebook-btn">Entrar com Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
