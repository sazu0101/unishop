import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';



//packages
import axios from "axios";
import config from "../config.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "../Redux/Authentication";
import { Link } from "react-router-dom";

//icons

//css
import "../CSS/Login.css";

//icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { CloseModalFun, ShowModalFun } from "../Redux/Variable";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // State for storing email input
  const [email, setEmail] = useState("");

  // State for storing password input
  const [password, setPassword] = useState("");

  //state for handling click event
  const [click, setClick] = useState(false);
  
  //decalre handleLogin for login a user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("action is coming");
      const res = await axios.post(`${config.apiUrl}/api/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {
        //if login is successful then this alert message will come
        alert("successfully login");

        //dispatch setUser reducer to authentication
        dispatch(
          setUser({
            email: res.data.user.email,
            password: res.data.user.password,
            token: res.data.token,
            role: res.data.user.token,
          })
        );

        //save email , password and token in the localstorage
        localStorage.setItem("email", JSON.stringify(res.data.user.email));
        localStorage.setItem(
          "password",
          JSON.stringify(res.data.user.password)
        );
        localStorage.setItem("role", JSON.stringify(res.data.user.role));
        localStorage.setItem("token", JSON.stringify(res.data.token));

        //reload after successfully sign in
        window.location.reload();

        //navigate to
        navigate(location.state || "/");

      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };




  const show = useSelector((state)=>state.variables.show) 
  console.log(show);
  const handleShow = () => dispatch(ShowModalFun());
  const handleClose = () => dispatch(CloseModalFun());


  return (
    <>


<Link  onClick={handleShow} className="user">
          <span>
          <HiOutlineUser className="user_icon" />{" "}
        </span>
      </Link>

  
 <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Shopee</Modal.Title>
        </Modal.Header>
        <form className="login-form" onSubmit={handleLogin} >
              <h2 className="mt-1">Login</h2>
              <p className="mb-3">Login with your email and password</p>
              <div className="mb-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  id="exampleInputEmail1"
                  placeholder="Enter your email"
                  autoComplete="none"
                  required
                />
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input
                  type={click ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  autoComplete="none"
                  required
                />
                <button
                  type="button"
                  className="hide-show-password"
                  onClick={() => setClick(!click)}
                >
                  {" "}
                  {click ? (
                    <FaRegEye type="checkbox" className="see" />
                  ) : (
                    <FaRegEyeSlash className="dont-see" />
                  )}{" "}
                </button>
              </div>
              <p
                className="forgot-password"
                onClick={() => alert("Forget password function will be update")}
              >
                Forgot Password
              </p>

              <button type="submit" className="sign-in-btn">
                Login
              </button>
                    
              <p className="mt-4">
                not have a account ?<Link to="/Register" onClick={handleClose}>Register</Link>
              </p>
            </form>
      </Modal>

    </>
  );
};

export default Login;
