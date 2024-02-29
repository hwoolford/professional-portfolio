import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../styles/contact.css"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setError("Please fill out all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <div className="body container-fluid">
      <h1 className="text-center title">Contact Me</h1>
      <form className="row g-3 form" onSubmit={handleFormSubmit}>
      <div className="col-md-6">
      <label className="form-label label">Enter your name:</label>
        <input className="inlineInput form-control"
          name="name"
          value={name}
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        </div>
        <div className="col-md-6">
        <label className="form-label label">Enter your email address:</label>
        <input className="inlineInput form-control"
          name="email"
          value={email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        </div>
        <div className="col-md-12">
        <label className="form-label label">Enter your message:</label>
        <input className="blockInput form-control"
          name="message"
          value={message}
          onChange={handleInputChange}
          type="text"
        />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && (
        <div>
          <p className="error-text">{error}</p>
        </div>
      )}
    </div>
  );
}
