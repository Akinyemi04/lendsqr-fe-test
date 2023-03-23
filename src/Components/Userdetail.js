import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Userdetail.css'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useDispatch } from 'react-redux';
import { login_change } from './store';
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

const Userdetail = () => {
    const dispatch = useDispatch()
    const email = useSelector((val)=>{
        return val.login.Email
      })
      const password = useSelector((val)=>{
        return val.login.password
      })
      const navigate = useNavigate()
    const data = useSelector((val)=>{
        return val.login.user
    })
    // useEffect(()=>{
    //     dispatch(login_change.change_footer_state(true))
    //     if ( email.indexOf('mail.com') === -1 && password.length === 0){
    //         navigate('/')
    //       }
    // },[])
    console.log(data)
  return (
    <>
        {
            data &&
            < div className='details'>
            <div className='head' >
                <NavLink to='/home' className='link'>
                    <span className='icon'><KeyboardBackspaceOutlinedIcon/></span><span>Back to Users</span>
                </NavLink>
                <h2><span className='user'>User Details</span>
                <span className='blacklist'>BLACKLIST USER</span>
                <span className='activate'>ACTIVATE USER</span></h2>
            </div>
            <div className='important'>
                <article>
                    <img src={data.profile.avatar} alt="" />
                    <section>
                        <p className='big_text'>{data.profile.firstName} {data.profile.lastName}</p>
                        <p className='small_text'>{data.accountNumber}</p>
                    </section>
                    <section>
                        <p className='parent_star'>User's Tier</p>
                        <p className='icon'><span><StarRateIcon/></span><StarOutlineIcon/><span></span><StarOutlineIcon/><span></span></p>
                    </section>
                    <section className='last'>
                        <p className=' big_text'>N{data.accountBalance}</p>
                        <p className='small_text strong'>12345678/Providus Bank</p>
                    </section>
                </article>
                <p className='documentation'>
                    <span className='main_span'>General Details</span>
                    <span>  Documents</span>
                    <span>Bank Details</span>
                    <span>Loans</span>
                    <span>Savings</span>
                    <span>App and System</span>
                </p>
            </div>
            <main>
                <section>
                    <h2>Personal Information</h2>
                    <article>
                        <div>
                            <p className='small'>FULL NAME</p>
                            <p className='big'>{data.profile.firstName} {data.profile.lastName}</p>
                        </div>
                        <div>
                            <p className='small'>PHONE NUMBER</p>
                            <p className='big'>{data.profile.phoneNumber}</p>
                        </div>
                        <div>
                            <p className='small'>EMAIL ADDRESS</p>
                            <p className='big'>{data.email}</p>
                        </div>
                        <div>
                            <p className='small'>BVN</p>
                            <p className='big'>{data.profile.bvn}</p>
                        </div>
                        <div>
                            <p className='small'>GENDER</p>
                            <p className='big'>{data.profile.gender}</p>
                        </div>
                        <div>
                            <p className='small'>MARITAL STATUS</p>
                            <p className='big'>Single</p>
                        </div>
                        <div>
                            <p className='small'>CHILDREN</p>
                            <p className='big'>None</p>
                        </div>
                        <div>
                            <p className='small'>TYPE OF RESIDENCE</p>
                            <p className='big'>Parent's Apartment</p>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Education and Employment</h2>
                    <article>
                        <div>
                            <p className='small'>LEVEL OF DUCATION</p>
                            <p className='big'>{data.education.level}</p>
                        </div>
                        <div>
                            <p className='small'>EMPLOYMENT STATUS</p>
                            <p className='big'>{data.education.duration}</p>
                        </div>
                        <div>
                            <p className='small'>SECTOR OF EMPLOYMENT</p>
                            <p className='big'>{data.education.sector}</p>
                        </div>
                        <div>
                            <p className='small'>DURATION OF EMPLOYEMENT</p>
                            <p className='big'>{data.education.duration}</p>
                        </div>
                        <div>
                            <p className='small'> OFFICE EMAIL</p>
                            <p className='big'>{data.education.officeEmail}</p>
                        </div>
                        <div>
                            <p className='small'>MONTHLY INCOME</p>
                            <p className='big'>{`N${data.education.monthlyIncome[0]} -N${data.education.monthlyIncome[1]}`}</p>
                        </div>
                        <div>
                            <p className='small'>LOAN REPAYMENT</p>
                            <p className='big'>N{data.education.loanRepayment}</p>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Socials</h2>
                    <article>
                        <div>
                            <p className='small'>TWITTER</p>
                            <p className='big'>{data.socials.twitter}</p>
                        </div>
                        <div>
                            <p className='small'>FACEBOOK</p>
                            <p className='big'>{data.socials.facebook}</p>
                        </div>
                        <div>
                            <p className='small'>INSTAGRAM</p>
                            <p className='big'>{data.socials.instagram}</p>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>
                        Guarantor
                    </h2>
                    <article>
                        <div>
                            <p className='small'>FULL NAME</p>
                            <p className='big'>{data.guarantor.firstName} {data.guarantor.lastName}</p>
                        </div>
                        <div>
                            <p className='small'>PHONE NUMBER</p>
                            <p className='big'>{data.guarantor.phoneNumber}</p>
                        </div>
                        <div>
                            <p className='small'>EMAIL ADDRESS</p>
                            <p className='big'>{data.guarantor.firstName}@gmail.com</p>
                        </div>
                        <div>
                            <p className='small'>RELATIONSHIP</p>
                            <p className='big'>Family</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
        }
    </>
 

  )
}

export default Userdetail;