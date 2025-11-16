import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  return (
    <div className="eh-auth-wrap">
      <div className="eh-auth-card">
        <h2 className="eh-auth-title">Create your account</h2>
        <p className="eh-auth-sub">Join events or start organizing</p>

        <form className="eh-form" onSubmit={(e) => e.preventDefault()}>
          <label className="eh-field">
            <span>Name</span>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>

          <label className="eh-field">
            <span>Email</span>
            <input
              type="email"
              placeholder="you@university.edu"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>

          <label className="eh-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </label>

          <label className="eh-field">
            <span>Role</span>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="organizer">Organizer</option>
            </select>
          </label>

          <button className="eh-btn eh-btn-primary eh-btn-block" type="submit">
            Create Account
          </button>
        </form>

        <p className="eh-auth-switch">
          Already have an account? <Link to="/auth/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
