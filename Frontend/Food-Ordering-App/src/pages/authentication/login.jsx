import { useState } from "react";
import Logo from "../../assets/images/LOGO 1.png";
import Footer from "../footer";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/register")
  }
  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="form">
            <div className="logo">
              <img src={Logo} />
            </div>
            <h3 className="welcome-text">Welcome 👋</h3>
            <p className="sub-text">
              Today is a new day. It’s your day. You shape it. <br />
              Sign in to start ordering.
            </p>
            <form className="Loginform">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@email.com"
              />

              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
              />

              <button className="Login">Sign in</button>
            </form>
            <p className="signup-text">
            Don't you have an account?  <span onClick={handleClick} style={{color:'#FC8A06',cursor: 'pointer'}}>Sign up</span>
            </p>
          </div>
        </div>
        <div className="right-container">
          <img
            src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732214695/Art_q1je1k.png"
            alt="Art"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
