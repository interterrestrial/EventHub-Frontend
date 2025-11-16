import { Link } from "react-router-dom";
import "../styles/Auth.css";
import "../styles/globals.css";

function Signup() {
  return (
    <div className="auth-wrap">
      <div className="card auth-card">
        <h2 className="auth-title">Create your account</h2>
        <p className="auth-sub">Join events or start organizing</p>

        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Name</label>
            <input className="input" type="text" placeholder="Your name" required />
          </div>

          <div className="field">
            <label>Email</label>
            <input className="input" type="email" placeholder="you@university.edu" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="Create a strong password" required />
          </div>

          <div className="field">
            <label>Role</label>
            <select className="select" defaultValue="student">
              <option value="student">Student</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          <button className="btn btn-primary btn-block" type="submit">Create Account</button>
        </form>

        <p className="auth-switch">Already have an account? <Link to="/auth/login">Log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;
