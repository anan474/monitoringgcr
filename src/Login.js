import { useState, Component } from "react";

import "./Login.css";

import astronot from "./assets/astronot.png";
import logountan from "./assets/logo-untan.png";

import { InputElement } from "./Components/InputElement";

function Cover() {
  return (
    <section name="cover" id="cover">
      <img src={astronot} alt="astronot" />
      <p id="cover-title">Monitoring GCR</p>
      <p id="cover-subtitle">Universitas Tanjungpura</p>
    </section>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>
        Dikembangkan oleh{" "}
        <span class="text-bold">UPT. Teknologi Informasi dan Komunikasi</span>
      </p>
      <p>Universitas Tanjungpura</p>
    </footer>
  );
};

const RememberMeOption = ({ value, onChange }) => {
  return (
    <div>
      <input type="checkbox" value={value} onChange={onChange} />
      Remember me
    </div>
  );
};

function Login() {
  // functional pure component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex-container">
      <Cover />
      <section name="login" id="login">
        <div id="login-content">
          <img id="login-logo" src={logountan} alt="logountan" />
          <p id="login-title-sub">Welcome Back</p>
          <p id="login-title">Login to your account</p>

          <InputElement
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username anda"
          />

          <InputElement
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password anda"
          />
          <div id="login-options">
            <RememberMeOption
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <a href="#" id="forgot-pass">
              Forgot password?
            </a>
          </div>
          <button
            id="login-btn"
            onClick={() => {
              console.log(username, password, rememberMe);

              const datajson = JSON.stringify({
                username: username,
                password: password,
                rememberMe: rememberMe,
              });

              fetch("http://localhost:5000/login", {
                method: "POST",
                body: datajson,
              });
            }}
          >
            Login
          </button>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Login;
