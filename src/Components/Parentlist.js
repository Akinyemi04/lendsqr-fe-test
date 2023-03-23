import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import List from './List'
import { filter_change, user_change } from './store'
import { useDispatch } from 'react-redux'
const Parentlist = () => {

const data = useSelector((val)=>{
    return val.users.array_for_each_page
})
const main_data = useSelector((val)=>{
    return val.users.data
})
const filter_user = useSelector((val)=>{
    return val.filter.filter_username
})
const filter_date = useSelector((val)=>{
    return val.filter.filter_date
})
const filter_email = useSelector((val)=>{
    return val.filter.filter_email
})
const filter_phone = useSelector((val)=>{
    return val.filter.filter_phone
})
const organization_filter = useSelector((val)=>{
return val.filter.organization_list
})
const status_filter = useSelector((val)=>{
    return val.filter.organization_list
      
})
const verify = useSelector((val)=>{
    return val.filter.verify_filter
})
const error_check = useSelector((val)=>{
    return val.users.error
})

const dispatch = useDispatch()

useEffect(()=>{
if(filter_user.length === 0 && filter_date.length === 0 && filter_email.length === 0 && organization_filter.length === 0 && filter_phone.length === 0 && status_filter.length === 0){
   dispatch(filter_change.verify(true))
}
else{
    dispatch(filter_change.verify(false))
}
},[filter_user,filter_date,filter_phone,filter_email,organization_filter,status_filter])
if(verify && error_check){
    return(
      <>
      {
        data.map((val,key)=>{
          return(
            <List value={val} index={key}/>
          )

        })
      }
      </>
    )
  }
  else if (!verify && error_check){
    return(
        <>{
            data.map((val,key)=>{
                if(filter_user === val.userName || filter_date === val.createdAt.slice(0,10) || filter_email=== val.email || organization_filter === val.orgName || filter_phone === val.phoneNumber ||status_filter === val.education.employmentStatus){
                    dispatch(user_change.check_error(false))
                    return(
                        <List value={val} key={key}/>
                    )
                }
            })

        }
        </>

    )

  }
  else if(verify === false || verify === true && !error_check){
    return(
        <>
            <li className='error_head'>Cant't Find What you looking for ?</li>
            <li>Try These Out</li>
            <li>hmm</li>
        </>
    )
  }

}

export default Parentlist;