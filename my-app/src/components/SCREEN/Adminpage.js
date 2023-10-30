import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Adminpage.css"
const Adminpage = () => {

  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.email === "admin@gmail.com" && credentials.password === "8120436859") {
      navigate("/allorders");
    }
    else {
      alert("Enter Valid Credentials")
    }
  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }



  return (

    <>
      <div className='container'>

      

        <form onSubmit={handleSubmit}>


          <div className="ml-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" name='email' value={credentials.email} onChange={onChange}></input>
            <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password " className="form-control w-75" name='password' value={credentials.password} onChange={onChange}></input>
          </div>


          <button type="submit" className="m-3 btn btn-success">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Adminpage