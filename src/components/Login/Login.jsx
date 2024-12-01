// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário de login
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
    // Lógica para login com Google
  };

  const handleFacebookLogin = () => {
    console.log('Login com Facebook');
    // Lógica para login com Facebook
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
          <button type="button" onClick={handleGoogleLogin} className="google-btn">Entrar com Google</button>
          <button type="button" onClick={handleFacebookLogin} className="facebook-btn">Entrar com Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
