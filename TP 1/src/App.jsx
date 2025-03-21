import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="root">
        <form>
          <div>
            <h2>Create an account</h2>
            <p>Enter your information to register</p>
          </div>
          <div>
            <label for="firstName">First Name</label>
            <input type="text" placeholder="FirstName" />
            <label for="lastName">First Name</label>
            <input type="text" placeholder="LastName" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="text" placeholder="Phone" />
          </div>
          <div> 
            <label for="password">Password</label>
            <input type="password" placeholder="****"></input>
          </div>
          <div>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="*****"></input>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
