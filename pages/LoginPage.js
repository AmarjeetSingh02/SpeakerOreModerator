import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value)
    setSuccess("")
    setEmailError("")
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    setSuccess("")
    setPasswordError("")
  };

  const SubmitHandler=(e)=>{
    e.preventDefault()
    if (email!==""){
      const emailRegex= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
      if(emailRegex.test(email)){
        setEmailError("")
        if(email==="speakerore@gmail.com"){
          setEmailError("")
          if(password==="demo1"){
            setSuccess("you are successfully login")
            props.toShowhaldler(true)
         
          }else{
            setPasswordError("password does'nt match")
            props.toShowhaldler(false)
          }

        }else{
          setEmailError("email does'nt match")
          props.toShowhaldler(false)
        }
      }else{
        setEmailError("Invalid email")
        props.toShowhaldler(false)
      }

    }else{
      setEmailError("email required")
      props.toshowhandler(false)
    }
  
    if (password!==""){

    }else{
      setPasswordError("password required")
    }
  }

  return (
    <div>
      <center>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-header text-dark">
                  <b>SpeakerOre Admin Login</b>
                </div>
                <div className="card-body">
               
                  <form onSubmit={SubmitHandler}  className="form-group text-dark">
                    {/* <div className="form-group text-dark"> */}
                      {/* <label for="inputEmail">Email</label> */}
                      {success && <><div className="success-msg">{success}</div><br></br></>}
            
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        value={email}
                        onChange={emailHandler}
                      />
                      {emailError && (
                        <div className="error-msg">{emailError}</div>
                      )}<br></br>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                      {/* <label for="inputPassword">Password</label> */}
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        value={password}
                        onChange={passwordHandler}
                      />
                      {passwordError && (
                        <div className="error-msg">{passwordError}</div>
                      )}
                      <br></br>
                    {/* </div> */}
                   
                
                <button type="submit" class="btn btn-primary">
                    Submit
                  </button>   </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default LoginPage;





