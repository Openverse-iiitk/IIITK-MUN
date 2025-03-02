// src/components/Register.js
import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API call here if needed
    setSubmitted(true);
  };

  return (
    <div className="register">
      <h2>Register for IIITK MUN</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <button type="submit">Register</button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thank you for registering, {form.name}!</h3>
          <p>We’ve received your details. Check your email ({form.email}) for further instructions.</p>
        </div>
      )}
    </div>
  );
}

export default Register;
