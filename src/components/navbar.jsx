import logo from '../images/logo.png'
import userIcon from '../images/usericon.png'
import notificationIcon from '../images/notifications.svg'
import searchIcon from '../images/search.svg'
import videoIcon from '../images/videoicon.svg'
import micIcon from '../images/mic.svg'
import menu from '../images/menu.svg'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={menu} alt="logo" width={35} />
                <Link to="/"><img src={logo} alt="logo" width={120} /></Link>
            </div>
            <div className='searchBox'>
                <div className="searchBar">
                    <input type="search" name="" id="" placeholder='Search' />
                    <button type='search'><img src={searchIcon} alt=""/></button>
                </div>
                <div className='micIcon'>
                    <img src={micIcon} alt="" width={25} />
                </div>
            </div>
            <div className='add-video'>
                <Link to="/about">About</Link>
            
            </div>

            <div className="profile">
                <Link to="/Addvideo"><img src={videoIcon} alt="" width={25} /></Link>
                <img src={notificationIcon} alt="" width={25} />
                <img src={userIcon} alt="userIcon" width={30} />
            </div>
        </div>
    );
}

export default Navbar;