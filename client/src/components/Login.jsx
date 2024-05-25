import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";
const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, SetInpval] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    SetInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginuser = async(e) => {
    e.preventDefault();
    
    const {email, password} = inpval;

    if (email === "") {
      alert("Please Enter Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid Email Address");
    } else if(password === ""){
      alert("Please Enter Password")
    } else {
      // console.log("user registration successfull");  

      const data = await fetch("http://localhost:4000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email, password 
        })
      });

      const res = await data.json();
      // console.log(res);

      // if(res.status === 201){
      //   alert("user registration done")
      //   SetInpval({...inpval, fname:"",email:"",password:"",cpassword:""})
      // }
    }
    
  }
  return(
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back, Please login</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                onChange={setVal}
                value={inpval.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  onChange={setVal}
                  value={inpval.password}
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />

                <div
                  onClick={() => setPassShow(!passShow)}
                  className="showpass"
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button onClick={loginuser} className="btn">Login</button>
            <p>
              Don't have an Account? <NavLink to="/register">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
