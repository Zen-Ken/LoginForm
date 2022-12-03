import React, { useState } from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  const [errors, setErrors] = useState({})
  //const [isSubmitting, setIsSubmitting] = useState(false)  
  
  const formik = useFormik({
    initialValues: { email: '', password: ''},
    onSubmit: values => {
      setErrors({...emailValidation(values.email), ...pswValidation(values.password)})
      //setIsSubmitting(true)
    } 
  })
  
  if(errors.emailError == '' && errors.pswError == ''){
    alert("Login Successful")
    //setErrors({})
  }

  function emailValidation(email){
    let message = {}
    if(email == ''){
      message = {emailError:"Field Required"}
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      message = {emailError:'Username should be an email'};
    }
    else{
      message = {emailError:''}
    }
    return message;
  }

  function pswValidation(psw){
    let message = {}
    if(psw == ''){ 
      message = {pswError:"Field Required"}   }
    else{
      message = {pswError:''}
    }
    return message;
  }


  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" id="emailField" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <div style={{color: "red"}}>{errors.emailError}</div>
        <div>Password</div>
        <input type="text" id="pswField" name="password" value={formik.values.password} onChange={formik.handleChange} />
        <div style={{color: "red"}}>{errors.pswError}</div>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
