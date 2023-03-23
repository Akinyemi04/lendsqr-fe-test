import './All_user.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login_change, user_change } from './store';
import icon_1 from './images/icon1.png'
import icon_2 from './images/icon2.png'
import icon_3 from './images/icon3.png'
import icon_4 from './images/icon4.png'
import Pagination from './Pagination';
import filter from './images/filter.png'
import arrow_down from './images/arrow-down.png'
import calender from './images/calender.png'
import { filter_change} from './store';
import Parentlist from './Parentlist';
const All_user_display = () => {
  const dispatch = useDispatch()
  const data = useSelector((val)=>{
    return val.users.array_for_each_page
  })
  const main_data = useSelector((val)=>{
    return val.users.data
  })
  const currentpage = useSelector((val)=>{
    return val.users.currentpage
  })
  const postperpage = useSelector((val)=>{
    return val.users.postperpage
  })

 

  
  const lastpostindex = currentpage *postperpage
  const firstpstindex = lastpostindex- postperpage

 
 
  useEffect(()=>{
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      dispatch(user_change.change_data(data))
    })
    .catch((err)=>{
      console.log(err)
    })
    dispatch(login_change.change_footer_state(false))
  },[dispatch,data.lengt])
  const element = document.getElementById(`${lastpostindex -1}`)

  useEffect(()=>{

    dispatch(user_change.change_array_page({
      firstpost : firstpstindex,
      lastpost:lastpostindex
    }))
    if(data.length>0 && element !== null ){
     
      element.style.border='none'
    }
   
  },[main_data,firstpstindex,lastpostindex],element,dispatch)


  function toggle_filter(){
    const elemnt = document.getElementById('toggle')
    if(elemnt.style.display === '' || elemnt.style.display === 'none'){
      elemnt.style.display = 'flex'
    }
    else{
      elemnt.style.display = 'none'
    }
  }

  function submit(){
    const organise = document.getElementById('organization')
    const date = document.getElementById('date')
    const status = document.getElementById('status')
    const user = document.getElementById('user')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    dispatch(filter_change.change_filter_date(date.value))
    dispatch(filter_change.change_filter_email(email.value))
    dispatch(filter_change.change_organization(organise.value))
    dispatch(filter_change.change_status(status.value))
    dispatch(filter_change.change_filter_phone(phone.value))
    dispatch(filter_change.change_filter_username(user.value))
    date.value =''
    status.value = ''
    user.value = ''
    organise.value = ''
    email.value = ''
    phone.value = ''
    const elemnt = document.getElementById('toggle')
    elemnt.style.display = 'none'
    dispatch(user_change.change_pagination('hidden'))

  }
  function clear(){
    dispatch(filter_change.reset())
    dispatch(filter_change.verify(true))
    const elemnt = document.getElementById('toggle')
    elemnt.style.display = 'none'
    dispatch(user_change.change_pagination('visible'))
  }

  return (
    <div className='all_users'>
      <h1>Users</h1>
      <article className='articulate'>
        <div>
          <img src={icon_1} alt="" />
          <p className="small_text">USERS</p>
          <p  className='Big_text'>2,453</p>
        </div>
        <div>
            <img src={icon_2} alt="" />
            <p className="small_text">ACTIVE USERS</p>
            <p  className='Big_text'>2,453</p>
        </div>
        <div>
          <img src={icon_3} alt="" />
          <p className="small_text">USERS WITH LOANS</p>
          <p  className='Big_text'>12,453</p>
        </div>
        <div>
          <img src={icon_4} alt=""/>
          <p className="small_text">USERS WITH SAVINGS</p>
          <p className='Big_text'>102,453</p>
        </div>
      </article>
      {
        data.length === 0 &&
        <div className="centerx">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      }
      { data.length > 0 &&
          <ul>
              <li className='head'>
                <p className='organization'><span>ORGANIZATION</span> <img onClick={toggle_filter} src={filter} alt="" /></p>

                <p className='user'><span>USERNAME</span> <img onClick={toggle_filter} src={filter} alt="" /></p>

                <p className='email center'><span>EMAIL</span> <img onClick={toggle_filter} src={filter} alt="" /></p>

                <p className='phone'><span> PHONE NUMBER</span> <img onClick={toggle_filter} src={filter} alt="" /></p>

                <p className='date'><span>DATE JOINED</span> <img onClick={toggle_filter} src={filter} alt="" /></p>

                <p className='status'><span>STATUS</span> <img onClick={toggle_filter} src={filter} alt="" /></p>
              </li>
              <Parentlist/>
              {/* {
                data.map((val,index)=>{
                    return(
                      <List value={val} index={index}/>
                    )
                })
              } */}
              <li id='toggle' className='absolute'>
                <span>Organization</span>

                <p className='option'><input type="text" placeholder='Organization' id='organization' /> <img src={arrow_down} alt="" /></p>

                <span>Username</span>

                <input id='user' type="text" placeholder='User' />

                <span>Email</span>

                <input id = 'email'  type="email" placeholder='Email' />

                <span>Date</span>
                <p className='option'>
                  <input id='date' type="text"  placeholder='Date' />
                  <img src={calender} alt="" />
                </p>


                <span>Phone Number</span>

                <input id='phone' type="tel"  placeholder='Phone Number'/>
                <span>Status</span>

                <p className='option'><input type="text" id='status'
                placeholder='Status' /> <img src={arrow_down} alt="" /></p>
                <p>
                  <button onClick={clear}>Reset</button>
                  <button onClick={submit} className='filter'>Filter</button>
                </p>
              </li>
          </ul>
      }
      <Pagination lastpost={lastpostindex}/>
    </div>
  )
}

export default All_user_display;