import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="divContainer">
        <form>
          <div>
            <h2>Create an account</h2>
            <p>Enter your information to register</p>
          </div>
          <div className="divCampo2">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="FirstName" />
            <label for="lastName">Last Name</label>
            <input type="text" id='lastName' placeholder="LastName" />
          </div>
          <div className='divCampo'>
            <label for="email">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className='divCampo'>
            <label for="phone">Phone</label>
            <input type="text" placeholder="Phone" />
          </div>
          <div className='divCampo'>
            <label for="password">Password</label>
            <input type="password" placeholder="****"></input>
          </div>
          <div className='divCampo'>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="*****"></input>
          </div>
          <div className='divButton'>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
