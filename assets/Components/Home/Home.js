import React from 'react';
// import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className='home-page'>
      <form>
        <label>
        Enter Your UserName
        <br/>
          <input type="text"/>
        </label>
        <br/>
        <label>
        Enter Your Password
        <br/>
          <input type="password"/>
        </label>
        <br/>
        <label>
          Remeber me
          <input type="checkbox"/>
        </label>
        <br/>
        
        <button>Sign in</button>
        <p>Forgot username or password?</p>
      {/* <input type="submit" value="Sign Up"/> */}
      </form>
    </div>
  )
}

export default Home;