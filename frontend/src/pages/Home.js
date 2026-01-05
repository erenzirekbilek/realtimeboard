import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/login');
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            {user ? (
                <>
                    <h1>Hoş geldin, <span style={{ color: 'blue' }}>{user}</span>! 👋</h1>
                    <p>RealtimeBoard projesine hoş geldin. Buradan board'larına erişebilirsin.</p>
                    <button onClick={handleLogout}>Çıkış Yap</button>
                </>
            ) : (
                <>
                    <h1>Hoş geldin!</h1>
                    <p>Lütfen devam etmek için giriş yapın.</p>
                    <button onClick={() => navigate('/login')}>Giriş Yap</button>
                    <button onClick={() => navigate('/signup')}>Kayıt Ol</button>
                </>
            )}
        </div>
    );
};

export default Home;