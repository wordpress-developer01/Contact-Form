import './App.css';
import "@fontsource/karla";
import "@fontsource/karla/700.css";
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setServerMessage(data.message);
  };

  return (
    <div className="App">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="text-message" onChange={handleChange} required />
        </div>

        <button type="submit">Send</button>

        {serverMessage && <p>{serverMessage}</p>}
      </form>
    </div>
  );
}

export default App;
