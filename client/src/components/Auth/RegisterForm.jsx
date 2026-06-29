import "./Auth.css";

function RegisterForm() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>⚽ Rural League</h1>

        <h2>Create Account</h2>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button>
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterForm;