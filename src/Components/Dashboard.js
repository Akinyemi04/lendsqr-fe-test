import './Dashboard.css'
import one from './images/two.png'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import two from './images/one.png'
import hand_holding from './images/hand-holding.png'
import handshake_regular from './images/hand-holding.png'
import piggy_bank from './images/piggy-bank.png'
import sack from './images/sack.png'
import user_check from './images/user-check.png'
import user_friends from './images/user-friends.png'
import users from './images/users.png'
import user_times from './images/user-times.png'
import badge_percent from './images/badge-percent.png'
import chart_bar from './images/chart-bar.png'
import clipboard_list from './images/clipboard-list.png'
import galaxy from './images/galaxy.png'
import icon from './images/icon.png'
import np_bank from './images/banking.png'
import scroll from './images/scroll.png'
import user_cog from './images/user-cog.png'
import sliders_h from './images/sliders-h.png'
import coin_solid from './images/coins-solid.png'
import logout from './images/sign-out.png'
import tire from './images/tire.png'
import { useSelector } from 'react-redux';
const Dashboard = () => {
    const footer = useSelector((val)=>{
        return val.login.display_footer
    })
  return (
    <div className='dashboard'>
        <p className='parent_one'><img src={one} alt="" /><span>Switch Organisation</span><span className='icon'><ArrowDropDownOutlinedIcon/></span></p>
        <p className='parent_two'><img src={two} alt="" /><span>Dashboard</span></p>
        <h5>CUSTOMERS</h5>
        <ul>
            <li className='important'>
                <img src={user_friends} alt="" />
                <span>Users</span>
            </li>
            <li>
                <img src={users} alt="" />
                <span>
                    Guarantors
                </span>
            </li>
            <li>
                <img src={sack} alt="" />
                <span>
                    Loans
                </span>
            </li>
            <li>
                <img src={handshake_regular} alt="" />
                <span>Decision Models</span>
            </li>
            <li>
                <img src={piggy_bank} alt="" />
                <span>Savings</span>
            </li>
            <li>
                <img src={hand_holding} alt="" />
                <span>  Loan Requests</span>
            </li>
            <li>
                <img src={user_check} alt="" />
                <span>WhiteList</span>
            </li>
            <li>
                <img src={user_times} alt="" />
                <span>Karma</span>
            </li>
        </ul>
        <h5>BUSINESSES</h5>
        <ul>
            <li>
                <img src={one} alt="" />
                <span>Organization</span>
            </li>
            <li>
                <img src={hand_holding} alt="" />
                <span>Loans Products</span>
            </li>
            <li>
                <img src={np_bank} alt="" />
                <span>Saving Products</span>
            </li>
            <li>
                <img src={coin_solid} alt="" />
                <span>Fees and Charges</span>
            </li>
            <li>
                <img src={icon} alt="" />
                <span>Transactions</span>
            </li>
            <li>
                <img src={galaxy} alt="" />
                <span>Services</span>
            </li>
            <li>
                <img src={user_cog} alt="" />
                <span>Service Account</span>
            </li>
            <li>
                <img src={scroll} alt="" />
                <span>Settlements</span>
            </li>
            <li>
                <img src={chart_bar} alt="" />
                <span>Reports</span>
            </li>
        </ul>
        <h5>SETTINGS</h5>
        <ul>
            <li>
            <img src={sliders_h} alt="" />
                <span>
                    Preferences
                </span>
            </li>
            <li>
                <img src={badge_percent} alt="" />
                <span>Fees and Pricing</span>
            </li>
            <li>
                <img src={clipboard_list} alt="" />
                <span>Audit Logs</span>
            </li>
            {
                footer &&
                <li>
                    <img src={tire} alt="" />
                    <span>Systems Messages</span>
                </li>
            }

        </ul>
        {
            footer &&
            <footer>
                <hr />
                <h5>
                    <img src={logout} alt="" />
                    <span>Logout</span>
                </h5>
                <span className='span'>
                    v1.2.0
                </span>
            </footer>
        }
    </div>
  )
}

export default Dashboard;