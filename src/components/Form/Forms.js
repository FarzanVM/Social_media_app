import './form.css'
import React from 'react'
import { useHistory } from 'react-router-dom';


function Forms() {

    let history = useHistory();

    return (

      <div className="formContainer">
      <form onSubmit={()=>{ history.push("/Blog"); }}>
        <label for="email">Email Address</label><br/>
        <input type="email" name="email" required placeholder="username@gmail.com"/><br/>
        <label for ="password">Password</label><br/>
        <input type="password" name="password" required/> <br/>
            <center><button type="submit">Login</button></center>
      </form>
      </div>
        
    )
}

export default Forms
