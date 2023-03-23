import example from './images/example.png'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import nav from './images/eye.png'
import active from './images/active.png'
import blacklist from './images/delete.png'

const List = ({value,index}) => {
  const[number,setNumber] = useState(Math.round( Math.random()*3))
  const array = useSelector((val)=>{
    return val.users.status_picker
  })
  const data = useSelector((val)=>{
    return val.users.data
  })
  const verify = useSelector((val)=>{
    return val.filter.verify_filter
})
  let nexxt = null

  // status_picker:['Inactive','Pending','Blacklisted','Active'],
  useEffect(()=>{
    const element = document.getElementById(`import${index}`)
    if (data.length>0 && element !==null){
      if(element.innerText === 'Inactive'){
        
       element.style.color ='rgba(84, 95, 125, 1)'
        element.style.backgroundColor= 'rgba(84, 95, 125, 0.1)'
      }
       else if(element.innerText === 'Pending' ){
        
       element.style.color ='rgba(233, 178, 0, 1)'
        element.style.backgroundColor= 'rgba(233, 178, 0, 0.1)'
      }
      else if (element.innerText === 'Blacklisted' ){
        
       element.style.color ='rgba(228, 3, 59, 1)'
        element.style.backgroundColor= 'rgba(228, 3, 59, 0.1)'
      }
      else if (element.innerText === 'Active' ){
        
       element.style.color ='rgba(57, 205, 98, 1)'
        element.style.backgroundColor= 'rgba(57, 205, 98, 0.1)'
      }
      else{ 
    
      }
    }
  },[number,])
function display(e){
  const element = e.target
  const next = element.nextElementSibling
  next.style.display='flex'
  nexxt = next
}

  function change_status_to_blacklist(){
    setNumber(2)
    nexxt.style.display = 'none'
  }
  function change_status_to_active(){
    setNumber(3)
    nexxt.style.display = 'none'

  }

  return (
    <li id={index} key={index}>
        <span className='organization'>{value.orgName}</span>
        <span className='user'>{value.userName}</span>
        <span className='email'>{value.email}</span>
        <span className='phone'>{value.phoneNumber}</span>
        <span className='date'>{value.createdAt.slice(0,10)}</span>
        <span className='status import' id={`import${index}`}>{array[number]}</span>
        <img onClick={display} src={example} alt="" />
        <div className='nav_div'>
          <NavLink to={`/User/${value.id}`}><img src={nav} alt="" /><span>View Details</span></NavLink>
          <p onClick={change_status_to_blacklist}><img src={blacklist} alt="" /><span>Blacklist User</span></p>
          <p onClick={change_status_to_active}><img src={active} alt="" /> <span>Activate User</span></p>
        </div>
    </li>
  )
}

export default List;