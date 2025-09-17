import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'CUSTOMER'
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError(null);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    console.log('Registration attempt:', { username: formData.username, email: formData.email });

    try {
      const response = await fetch('http://localhost:9090/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Registration response:', { status: response.status, data });

      if (response.ok) {
        console.log('User registered successfully:', data);
        setSuccess('Registration successful! Redirecting to login...');
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error: Unable to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        
        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
        
        {success && (
          <div className="success-message">
            <span>{success}</span>
          </div>
        )}
        
        {isLoading && (
          <div className="status-message">
            <span>Processing registration...</span>
          </div>
        )}
        
        <form onSubmit={handleRegister} className="form-content">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="form-input"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="form-input"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              value={formData.role}
              onChange={handleInputChange}
              className="form-input"
              required
              disabled={isLoading}
            >
              <option value="CUSTOMER">Customer</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="form-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        
        <div className="form-footer">
          <a href="/login" className="form-link">Already have an account? Login here</a>
        </div>
      </div>
    </div>
  );
}