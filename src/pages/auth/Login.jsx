import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="eh-auth-wrap">
      <div className="eh-auth-card">
        <h2 className="eh-auth-title">Welcome back</h2>
        <p className="eh-auth-sub">Log in to continue</p>

        <form className="eh-form" onSubmit={(e) => e.preventDefault()}>
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
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </label>

          <button className="eh-btn eh-btn-primary eh-btn-block" type="submit">
            Log In
          </button>
        </form>

        <p className="eh-auth-switch">
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
