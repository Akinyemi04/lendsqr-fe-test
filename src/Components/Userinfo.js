import './User_info.css'
import Header from './Header'
import Dashboard from './Dashboard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Userdetail from './Userdetail'
import { useDispatch } from 'react-redux'
import { login_change } from './store'
const User_info = () => {
  const dispatch = useDispatch()
  const{id} = useParams()
  useEffect(()=>{
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
        dispatch(login_change.change_user(data))
    })
    .catch((err)=>{
      console.log(err)
    })
  },[dispatch,id])
  return (
    <div className='user_info'>
      <Header/>
      <main className='main'>
        <Dashboard/>
        <Userdetail/>
      </main>
    </div>
  )
}

export default User_info