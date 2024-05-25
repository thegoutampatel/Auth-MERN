import React, { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cPassShow, setCpassShow] = useState(false);
  const [inpval, SetInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    SetInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async(e) => {
    e.preventDefault()

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("Please Enter Your Name");
    } else if (email === "") {
      alert("Enter Valid Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid Email Address");
    } else if (password === "") {
      alert("Please Enter Password");
    }else if (password < 6) {
      alert("Password have must 6 char");
    }else if (cpassword === "") {
      alert("Please Enter Confirm Password");
    }  else if (password !== cpassword) {
      alert("Password and Confirm Password Not Matched");
    } else {
      // console.log("user registration successfull");

      const data = await fetch("http://localhost:4000/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          fname, email, password, cpassword 
        })
      })

      const res = await data.json();
      // console.log(res);

      if(res.status === 201){
        alert("user registration done")
        SetInpval({...inpval, fname:"",email:"",password:"",cpassword:""})
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              we are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                onChange={setVal}
                value={inpval.fname}
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter Your Name"
              />
            </div>

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

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  onChange={setVal}
                  value={inpval.cpassword}
                  type={!cPassShow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Enter Your Confirm Password"
                />

                <div
                  onClick={() => setCpassShow(!cPassShow)}
                  className="showpass"
                >
                  {!cPassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button onClick={addUserdata} className="btn">
              Sign Up
            </button>
            <p>
              have an Account? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
