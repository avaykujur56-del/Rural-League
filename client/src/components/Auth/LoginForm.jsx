import "./Auth.css";

function LoginForm() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>⚽ Rural League</h1>

        <h2>Login</h2>

        <form>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default LoginForm;