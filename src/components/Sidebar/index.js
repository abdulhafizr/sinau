import {Link, useHistory, useLocation} from 'react-router-dom'
import {
    ICMessage,
    ICNotificationActive,
    ICNotificationProfileActive,
    ICDashboard,
    ICDashboardActive,
    ICActivity,
    ICActivityActive,
    ICHelp,
    ICHelpActive,
    ICLogout,
    DMUser1
} from '../../assets'

import './index.css'

function Sidebar() {

    const route = useHistory()
    const {pathname} = useLocation()

    const toggleMessage = () => {
        const message = document.querySelector('.messages')
        message.classList.toggle('active')
    }

    return (
        <div className={`sidebar__wrapper ${pathname === '/profile' ? 'active' : ''}`}>
            
            {/* Icon Notification */}
            <div className="sidebar__icon-notif">
                <img src={pathname === '/profile' ? ICNotificationProfileActive :ICNotificationActive} alt="notif"/>
            </div>
            {/* Icon Message for Mobile Screen */}
            {
                pathname === '/' || pathname === '/my' ? (
                    <div 
                        className="sidebar__icon-message"
                        onClick={toggleMessage}
                    >
                        <img src={ICMessage} alt="message"/>
                    </div>
                ) : ""
            }
            
            {/* User Information */}
            <div className={`sidebar__user-info `}>
                <img 
                    src={DMUser1}
                    onClick={() => route.push('/profile')} 
                    alt="user info"
                />
                <h1 className="user-name">Emir Kharisma</h1>
                <p className="user-status">online</p>
            </div>

            {/* Sidebar Main */}
            <div className="sidebar__main">
                <Link 
                    to="/" 
                    className={`sidebar__main-item ${pathname === '/' || pathname === '/my' ? 'active' : ''}`}
                >
                    <img src={pathname === '/' || pathname === '/my' ? ICDashboardActive : ICDashboard} alt="dashboard icon"/>
                    <p>Dashboard</p>
                </Link>
                
                <Link 
                    to="/activity" 
                    className={`sidebar__main-item ${pathname.includes('/activity') ? 'active' : ''}`}
                >
                    <img src={pathname.includes('/activity') ? ICActivityActive : ICActivity} alt="activity icon"/>
                    <p>Activity</p>
                </Link>
                
                <Link 
                    to="/help" 
                    className={`sidebar__main-item ${pathname === '/help' ? 'active' : ''}`}
                >
                    <img src={pathname === '/help'? ICHelpActive : ICHelp} alt="help icon"/>
                    <p>Help</p>
                </Link>
                
                <Link 
                    to="/logout" 
                    className="sidebar__main-item"
                >
                    <img src={ICLogout} alt="logout icon"/>
                    <p className="logout">Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
