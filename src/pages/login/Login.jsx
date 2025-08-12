import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import '../../../src/index.css'
import { signup, login } from '../../firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"

const Login = () => {

  const [sign, setSign] = useState('Sign In')

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (sign === 'Sign In') {
      await login(email, password)
    }
    else {
      await signup(name, email, password)
    }
    setLoading(false)
  }



  return (
    loading ? <div className='flex w-full h-screen items-center justify-center'>
      <img src={netflix_spinner} alt="" className='w-16' />
    </div> :
      <div className='login-container py-2 px-7'>
        <img src={logo} alt="" className='w-36' />
        <div className='w-full max-w-100 backdrop-brightness-30 m-auto p-15 rounded-sm'>
          <h1 className='font-bold text-4xl mb-5'>{sign}</h1>
          <form onSubmit={user_auth}>
            {sign === 'Sign Up' && (<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='w-full h-11 text-white my-3 mx-0 outline-0 rounded-sm bg-neutral-700 px-5 py-4 placeholder:font-bold' />)}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-11 text-white my-3 mx-0 outline-0 rounded-sm bg-neutral-700 px-5 py-4 placeholder:font-bold' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full h-11 text-white my-3 mx-0 outline-0 rounded-sm bg-neutral-700 px-5 py-4 placeholder:font-bold' />
            <button type='submit' className='w-full cursor-pointer border-0 outline-0 p-2 text-white rounded-sm mt-5 font-semibold bg-red-600'>{sign}</button>
            <div className='flex items-center text-sm justify-between text-neutral-500 mt-1.5'>
              <div className='flex items-center gap-1'>
                <input type="checkbox" className='h-4 w-4' id='remember' />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className='mt-10 text-neutral-500'>
            {sign === "Sign In" ? <p>New to Netflex <span className='text-white font-semibold ml-1.5 cursor-pointer' onClick={() => setSign('Sign Up')}>Sign Up Now</span></p> : <></>}
            {sign === "Sign Up" ? <p>Already have Account <span className='text-white font-semibold ml-1.5 cursor-pointer' onClick={() => setSign('Sign In')}>Sign In Now</span></p> : <></>}
          </div>
        </div>
      </div>
  )
}

export default Login