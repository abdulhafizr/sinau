import {ICAddMessage, ICSearchMessage, DMUser1} from '../../../assets'
import './index.css'

function Messages() {
    return (
        <div className="messages">
            <div className="messages__header">
                <h1>Messages</h1>
                <img src={ICAddMessage} alt="Add Message"/>
            </div>
            <div className="messages__search">
                <img src={ICSearchMessage} alt="Search"/>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="messages__body">
                <div className="message">
                    <img src={DMUser1} alt="Profile" className="message__profile"/>
                    <div className="message__info">
                        <h1 className="message__name">Nissa Sabyan</h1>
                        <p className="message__history">How about number 3?</p>
                        <span className="message__timestamp">10.15 pm</span>
                    </div>
                </div>
                <div className="message">
                    <img src={DMUser1} alt="Profile" className="message__profile"/>
                    <div className="message__info">
                        <h1 className="message__name">Nissa Sabyan</h1>
                        <p className="message__history">How about number 3?</p>
                        <span className="message__timestamp">10.15 pm</span>
                    </div>
                </div>
                <div className="message">
                    <img src={DMUser1} alt="Profile" className="message__profile"/>
                    <div className="message__info">
                        <h1 className="message__name">Nissa Sabyan</h1>
                        <p className="message__history">How about number 3?</p>
                        <span className="message__timestamp">10.15 pm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
