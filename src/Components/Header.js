import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import user from './images/user.png'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import logo from './images/Logo.png'
const Header = () => {
  return (
    <header>
        <img className='logo' src={logo} alt="" />
        <p className='search'><input placeholder='Search for anything' type="text" /> <span className='search_icon'><SearchIcon/></span></p>
        <aside>
            <span className='doc'>Docs</span>
            <span><NotificationsNoneOutlinedIcon/></span>
            <img src={user} alt="" />
            <p className='user'><span>Adedeji</span><span className='arrow'><ArrowDropDownOutlinedIcon/></span></p>
        </aside>
    </header>
  )
}

export default Header;