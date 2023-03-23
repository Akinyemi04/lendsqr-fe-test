import Header from "./Header";
import Dashboard from "./Dashboard";
import './Home.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import All_user_display from "./All_user_display";
const Home = () => {
  const email = useSelector((val)=>{
    return val.login.Email
  })
  const password = useSelector((val)=>{
    return val.login.password
  })
  const navigate = useNavigate()
  useEffect(()=>{
    if ( email.indexOf('mail.com') === -1 && password.length === 0){
      navigate('/')
    }

  },[])
  return (
    <div className="home">
      <Header/>
      <main>
        <Dashboard/>
        <All_user_display/>
      </main>
    </div>
  )
}

export default Home;