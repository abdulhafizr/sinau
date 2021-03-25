import {ICAddMessage, ICSearchMessage} from '../../../assets'
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
        </div>
    )
}

export default Messages
