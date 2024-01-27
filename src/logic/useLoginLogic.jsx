import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

export const useLoginLogic = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(LoginContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setIsLoading] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const handleInputChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://propsqr.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                localStorage.setItem("jwt", data.token);
                setAlertType('success');
                setAlertMessage('Login successful');
                setShowAlert(true);
                setToken(data.token);
                navigate("/dashboard");
            } else if (response.status === 404) {
                console.error('Login failed:', response.status, data.message);
                setAlertType('error');
                setAlertMessage('User not found');
                setShowAlert(true);
            } else if (response.status === 400) {
                console.error('Login failed:', response.status, data.message);
                setAlertType('error');
                setAlertMessage("Email not verified");
                setShowAlert(true);
            } else if (response.status === 401) {
                console.error('Login failed:', response.status, data.message);
                setAlertType('error');
                setAlertMessage('Invalid password');
                setShowAlert(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return {
        formData,
        loading,
        alertType,
        alertMessage,
        showAlert,
        handleInputChange,
        handleLogin,
    };
};
