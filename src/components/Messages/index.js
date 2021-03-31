import {ICAddMessage, ICRightArrow, DMUser1} from '../../assets'
import {SearchMessage} from '../../components'
import './index.css'

function Messages({data = []}) {
    
    const toggleMessage = () => {
        const message = document.querySelector('.messages')
        message.classList.toggle('active')
    }

    return (
        <div className="messages">
            <div className="messages__header">
                <img 
                    src={ICRightArrow} 
                    onClick={toggleMessage}
                    alt="Back"
                />
                <h1>Messages</h1>
                <img src={ICAddMessage} alt="Add"/>
            </div>

            <SearchMessage />
            
            <div className="messages__body">
                {
                    data.map((user, index) => (
                        <div className="message" key={index}>
                            <img src={DMUser1} alt="Profile" className="message__profile"/>
                            <div className="message__info">
                                <h1 className="message__name">{user.name}</h1>
                                <p className="message__history">How about number 3?</p>
                                <span className="message__timestamp">10.15 pm</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Messages
