import Footer from '../../components/Footer';
import MainPage from '../../components/MainPage';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <MainPage />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
