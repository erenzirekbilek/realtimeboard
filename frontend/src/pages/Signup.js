import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstname: '', lastname: '', username: '', email: '', password: '', role: 'USER', active: true
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
            navigate('/login');
        } catch (error) {
            alert("Hata: " + error.response?.data?.message || "Kayıt yapılamadı");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ad" onChange={e => setFormData({...formData, firstname: e.target.value})} required /><br/>
                <input type="text" placeholder="Soyad" onChange={e => setFormData({...formData, lastname: e.target.value})} required /><br/>
                <input type="text" placeholder="Kullanıcı Adı" onChange={e => setFormData({...formData, username: e.target.value})} required /><br/>
                <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required /><br/>
                <input type="password" placeholder="Şifre" onChange={e => setFormData({...formData, password: e.target.value})} required /><br/>
                <button type="submit">Kaydol</button>
            </form>
        </div>
    );
};

export default Signup;