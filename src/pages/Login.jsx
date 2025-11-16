import { Link } from "react-router-dom";
import "../styles/Auth.css";
import "../styles/globals.css";

function Login() {
  return (
    <div className="auth-wrap">
      <div className="card auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Log in to continue</p>

        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Email</label>
            <input className="input" type="email" placeholder="you@university.edu" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="••••••••" required />
          </div>

        <button className="btn btn-primary btn-block" type="submit">Log In</button>
        </form>

        <p className="auth-switch">Don’t have an account? <Link to="/auth/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
