import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormRegister } from './components/FormRegister/FormRegister' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <FormRegister/>
    
    /*<>
      <div className="divContainer">
        <form>
          <div>
            <h2>Create an account</h2>
            <p>Enter your information to register</p>
          </div>
          <div className="divCampo2">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="FirstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' placeholder="LastName" />
          </div>
          <div className='divCampo'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className='divCampo'>
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="Phone" />
          </div>
          <div className='divCampo'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="****"></input>
          </div>
          <div className='divCampo'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="*****"></input>
          </div>
          <div className='divButton'>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>*/
  )
}

export default App
