import {ICAddMessage} from '../../../assets'
import './index.css'

function Messages() {
    return (
        <div className="messages">
            <div className="messages__header">
                <h1>Messages</h1>
                <img src={ICAddMessage} alt="Add Message"/>
            </div>
        </div>
    )
}

export default Messages
