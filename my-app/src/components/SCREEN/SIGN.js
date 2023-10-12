import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SIGN() {
    

    const [credentials, setcredentials] = useState({ name: "", email: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password})
    
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            alert("Valid Credentials")
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

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}></input>
                    </div>


                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/LOGIN" className="m-3 btn btn-danger" >Already have an account.</Link>
                </form>
            </div>




        </>
    )
}

