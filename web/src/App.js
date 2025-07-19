import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    customer_name: "",
    location: "",
    note: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/requests", form);
    setSuccess(true);
  };

  return (
    <div className="container">
      <h2>Request a Tow</h2>
      {success ? (
        <p>Request Submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="customer_name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />
          <textarea
            name="note"
            placeholder="Note"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
