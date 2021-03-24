import {
    ICNotificationActive,
    ICActivityActive,
    ICDashboard,
    ICHelp,
    ICLogout,
    DMUser1
} from '../../../assets'

import './index.css'

function Sidebar() {
    return (
        <div className="sidebar__wrapper">
            {/* Icon Notification */}
            <img className="sidebar__icon-notif" src={ICNotificationActive} alt="icon notif"/>
            
            {/* User Information */}
            <div className="sidebar__user-info">
                <img src={DMUser1} alt="user info"/>
                <h1 className="user-name">Emir Kharisma</h1>
                <p className="user-status">online</p>
            </div>

            {/* Sidebar Main */}
            <div className="sidebar__main">
                <div className="sidebar__main-item">
                    <img src={ICDashboard} alt="dashboard icon"/>
                    <p>Dashboard</p>
                </div>
                <div className="sidebar__main-item active">
                    <img src={ICActivityActive} alt="activity icon"/>
                    <p>Activity</p>
                </div>
                <div className="sidebar__main-item">
                    <img src={ICHelp} alt="help icon"/>
                    <p>Help</p>
                </div>
                <div className="sidebar__main-item">
                    <img src={ICLogout} alt="logout icon"/>
                    <p className="logout">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
