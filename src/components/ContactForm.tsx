"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("Thanks — we'll be in touch within a day.");
    setName("");
    setEmail("");
    setService("Web Development");
    setMessage("");
  };

  return (
    <form className="contact-form glass" onSubmit={handleSubmit}>
      <div className="row-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">Service</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Web Development</option>
          <option>Graphic Design</option>
          <option>SEO</option>
          <option>App Development</option>
          <option>WordPress</option>
          <option>Shopify</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          placeholder="What are you trying to build?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
        Send message →
      </button>
      <p className="form-msg" style={{ marginTop: "14px", fontFamily: "IBM Plex Mono", fontSize: "13px", color: "var(--gold)", minHeight: "16px" }}>
        {successMsg}
      </p>
    </form>
  );
}
