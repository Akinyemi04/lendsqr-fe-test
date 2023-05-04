import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from './images/Logo.png'
import image from './images/pablo.png' 
import { login_change } from './store'

const Signin = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const email = useSelector((value)=>{
    return value.login.Email
  })
  const password = useSelector((value)=>{
    return value.login.password
  })
  const Toggle = useSelector((value)=>{
    return value.login.button
  })
  const placeholder = useSelector((value)=>{
    return value.login.email_placeholder
  })
  useEffect(()=>{
    dispatch(login_change.update_email(''))
    dispatch(login_change.update_password(''))
  },[dispatch])

  function Toggle_password(){
    const password = document.getElementById('password')
    if(password.type === 'password'){
      password.type = 'text'
      dispatch(login_change.change_password_display('HIDE'))
    }
    else{
      password.type = 'password'
      dispatch(login_change.change_password_display('SHOW'))
    }
  }

  function submit(e){
    e.preventDefault()
    if ( email.indexOf('.com') !== -1 && password.length !== 0){
        navigate('/home')
    }
    else if (email.indexOf('mail.com') !== -1 && password.length === 0){
      const password = document.getElementsByClassName('password')
      password[0].style.border = '1px solid rgba(242, 130, 128,0.4)'
      setTimeout(()=>{
        password[0].style.border = '1px solid rgba(84, 95, 125, 0.15)'
      },3000)
    }
    else{
      dispatch(login_change.update_email(''))
      const email = document.getElementById('email')
      email.style.border = '1px solid rgba(242, 130, 128,0.4)'
      dispatch(login_change.change_placeholder('invalid Email'))
      setTimeout(()=>{
        email.style.border= '1px solid rgba(84, 95, 125, 0.15)'
        dispatch(login_change.change_placeholder('Email'))

      },3000)
    }
  }

  return (
    <div className='log_in'>
      <section>
        <img className='img' src={logo} alt="" />
        <img className='bg_image' src={image} alt="" />
      </section>
      <form action="">

          <h1 id='welcome'>Welcome!</h1>
          <p className='info'>Enter details to login</p>

          <input id='email' value={email} type="email" placeholder={placeholder} onChange={(e)=>{
            dispatch(login_change.update_email(e.target.value))

          }} />

          <p value={password} className='password'><input id='password' onChange={(e)=>{
            dispatch(login_change.update_password(e.target.value))
          }} type="Password" placeholder='password' /><span onClick={Toggle_password}>{Toggle}</span></p>
          <p className='forgot_password'><span>FORGOT PASSWORD?</span></p>
          <button onClick={submit}>LOG IN</button>
        </form>
    </div>
  )
}

export default Signin;