import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:9090/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Login response:', { status: response.status, data });

      if (response.ok) {
        console.log('User logged in successfully:', data);
        
        // Redirect based on role
        if (data.role === 'CUSTOMER') {
          navigate('/customerhome');
        } else if (data.role === 'ADMIN') {
          navigate('/adminhome');
        } else {
          setError('Invalid user role');
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error: Unable to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        
        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
        
        {isLoading && (
          <div className="status-message">
            <span>Logging in...</span>
          </div>
        )}
        
        <form onSubmit={handleSignIn} className="form-content">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit" 
            className="form-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div className="form-footer">
          <a href="/register" className="form-link">New User? Sign up here</a>
        </div>
      </div>
    </div>
  );
}