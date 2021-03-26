import {ICPhoneNumber, ICChangePassword, ICChatSetting, ICPushNotification, ICPrivacyAndSecurity, ICDataAndStorage} from '../../../assets'
import {HeaderProfile} from '../../../components'
import './index.css'

function Profile() {
    return (
        <div className="profile">
            <HeaderProfile />
            
            <h1 className="profile__label">Profile Settings</h1>
            <div className="profile__body">
                <div className="profile__body-item">
                    <img src={ICPhoneNumber} alt="phone number"/>
                    <p className="profile__body-item-label">Phone Numbers</p>
                </div>
                <div className="profile__body-item">
                    <img src={ICChangePassword} alt="change password"/>
                    <p className="profile__body-item-label">Change Password</p>
                </div>
                <div className="profile__body-item">
                    <img src={ICChatSetting} alt="chat setting"/>
                    <p className="profile__body-item-label">Chat Settings</p>
                </div>
                <div className="profile__body-item">
                    <img src={ICPushNotification} alt="push notification"/>
                    <p className="profile__body-item-label">Push Notifications</p>
                </div>
                <div className="profile__body-item">
                    <img src={ICPrivacyAndSecurity} alt="privacy and security"/>
                    <p className="profile__body-item-label">Privacy and Security</p>
                </div>
                <div className="profile__body-item">
                    <img src={ICDataAndStorage} alt="data and storage"/>
                    <p className="profile__body-item-label">Data and Storage</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
