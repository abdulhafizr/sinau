import {ICAddMessage, ICRightArrow, DMUser1} from '../../assets'
import {SearchMessage} from '../../components'
import './index.css'

const users = [
    {
        foto:"profile 1",
        name:"Deddy Cobuzier"
    },
    {
        foto:"profile 2",
        name:"Eden Hazard"
    },
    {
        foto:"profile 3",
        name:"Isyana Sarasvati"
    },
    {
        foto:"profile 4",
        name:"Nissa Sabyan"
    },
    {
        foto:"profile 5",
        name:"Peppy"
    },
    {
        foto:"profile 6",
        name:"Prilly Latuconsina"
    },
    {
        foto:"profile 7",
        name:"Prof. Winarto"
    },
    {
        foto:"profile 8",
        name:"Rio Dewanto"
    },
    {
        foto:"profile 9",
        name:"Tompi"
    },
    {
        foto:"profile 10",
        name:"Windy Larasati"
    }
]

function Messages() {
    
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
                    users.map((user, index) => (
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
