import {DMUser1, ICEditProfile} from '../../../assets'
import './index.css'

function HeaderProfile() {
    return (
        <div className="header__profile">
            <div className="header__profile-body">
                <div className="header__profile-avatar">
                    <img src={DMUser1} alt="user"/> 
                    <div className="change__photo">
                        <input type="file" id="change__photo" accept="image/*" hidden/>
                        <label htmlFor="change__photo"><img src={ICEditProfile} alt="edit"/></label>
                    </div>
                </div>
                <h1 className="header__profile-name">Emir Kharisma</h1>
            </div>
        </div>
    )
}

export default HeaderProfile
