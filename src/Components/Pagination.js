import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_change } from './store';
import { useEffect } from 'react';
import arrow_down from './images/arrow-down.png'
import left1 from './images/prev-btn.png'
import right11 from './images/next-btn.png'

const Pagination = ({lastpost}) => {
    const pages = useSelector((val)=>{
        return val.users.pages
    })
    const postperpage = useSelector((val)=>{
        return val.users.postperpage
    })
    const data = useSelector((val)=>{
        return val.users.data
    })
    const currentpage = useSelector((val)=>{
        return val.users.currentpage
    })
    const max_number_page = useSelector((val)=>{
        return val.users.max_number_page
    })
    const min_number_page = useSelector((val)=>{
        return val.users.min_number_page
    })
     const pagination_visibility = useSelector((val)=>{
        return val.users.pagination_visibility
     })
    const  totalposts = data.length
  
    let page_number_limit = 3
    let page_assist = null

    const dispatch = useDispatch()

    if (pages.length > max_number_page){
        page_assist = <span>&hellip;</span>
    }

    useEffect(()=>{
        let i = 1
        for (i; i<= Math.ceil(totalposts/ postperpage); i++ ){
            dispatch(user_change.push_page(i))
         }
    })
    function left(){
        if(currentpage  > 1){
            dispatch(user_change.change_current_page(currentpage-1))
            if((currentpage -1) % page_number_limit === 0){
                dispatch(user_change.set_max_number_page(max_number_page - page_number_limit))
                dispatch(user_change.set_min_number_page(min_number_page - page_number_limit))
            }
        }
        else {

        }

    }
    function right1(){
        if (currentpage < pages[pages.length -1]){
            dispatch(user_change.change_current_page(currentpage+1))
            if(currentpage + 1 > max_number_page){
                dispatch(user_change.set_max_number_page(max_number_page + page_number_limit))
                dispatch(user_change.set_min_number_page(min_number_page + page_number_limit))
            }
        }
        else{

        }
    }
    function setCurrentPage(e){
        dispatch(user_change.change_current_page(e))
    }
  return (
    <footer style={{visibility:pagination_visibility}}>
        { pages.length > 0 &&
        <>
            <div className='left'>
                <span>Showing</span>
                <p><span>{lastpost}</span><img src={arrow_down} alt="" /></p>
                <span> Out of {totalposts}</span>
            </div>
            <aside>
                <img onClick={left} src={left1} alt="" />
                {
                    pages.map((val,index)=>{
                        if(val < max_number_page+1 && val > min_number_page ){
                            return(
                                <span className={
                                    val === currentpage? 'active':''
                                } onClick={()=>{setCurrentPage(val)}} key={index}>{val}</span>
                            )
                        }
           
                    })
                }
                {page_assist}
                <img onClick={right1} src={right11} alt="" />
            </aside>

        </>

        }
    </footer>
  )
}

export default Pagination;