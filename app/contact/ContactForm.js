"use client";
import { useState } from "react";

const WA_NUMBER = "923297708264";
const EMAIL = "zahidzubair489@gmail.com";
const SITE = "https://zubair.dyznoai.com/";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", details: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.type) next.type = "Please choose a project type.";
    if (form.details.trim().length < 10) next.details = "Please add a few more details (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) { setStatus("Please fix the highlighted fields."); return; }
    const msg = `Hi Zubair, I saw your portfolio at zubair.dyznoai.com.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AProject type: ${encodeURIComponent(form.type)}%0ABudget: ${encodeURIComponent(form.budget || "Not specified")}%0A%0ADetails: ${encodeURIComponent(form.details)}`;
    setStatus("Opening WhatsApp with your enquiry pre-filled — press send in WhatsApp to submit it. You can also email instead, using the address below.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener");
  };

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
          <span className="error">{errors.name || ""}</span>
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
          <span className="error">{errors.email || ""}</span>
        </div>
        <div className="field">
          <label htmlFor="type">Project type *</label>
          <select id="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="">Choose a project type</option>
            <option>New website</option><option>WordPress website</option><option>Website redesign</option><option>SEO / audit</option><option>Speed optimisation</option><option>AI integration</option><option>Other</option>
          </select>
          <span className="error">{errors.type || ""}</span>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget (optional)</label>
          <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
            <option value="">Prefer not to say yet</option>
            <option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option>
          </select>
          <span className="error"></span>
        </div>
        <div className="field full">
          <label htmlFor="details">Project details *</label>
          <textarea id="details" rows={5} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="What does your business do, and what should the website achieve?" />
          <span className="error">{errors.details || ""}</span>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Send Project Enquiry via WhatsApp</button>
      {status && <p className={`status ${Object.keys(errors).length ? "err" : "ok"}`} role="status">{status}</p>}
      <p className="note">Prefer email? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. WhatsApp (fastest): <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">+92 329 7708264</a>. Portfolio: <a href={SITE}>{SITE}</a></p>
    </form>
  );
}
