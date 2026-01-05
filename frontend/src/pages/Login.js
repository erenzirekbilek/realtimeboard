import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(credentials);
            if (response.status === 200) {
                // Backend string dönüyor: "Login was successful!"
                // Kullanıcı ismini saklıyoruz
                localStorage.setItem("user", credentials.username);
                navigate('/');
            }
        } catch (error) {
            alert("Giriş başarısız: " + (error.response?.data || "Bilinmeyen hata"));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Giriş Yap</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Kullanıcı Adı" onChange={e => setCredentials({...credentials, username: e.target.value})} required /><br/>
                <input type="password" placeholder="Şifre" onChange={e => setCredentials({...credentials, password: e.target.value})} required /><br/>
                <button type="submit">Giriş</button>
            </form>
        </div>
    );
};

export default Login;