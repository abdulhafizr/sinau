import { ICSearchMessage } from '../../../assets'
import './index.css'

function SearchMessage() {
    return (
        <div className="messages__search">
            <img src={ICSearchMessage} alt="Search"/>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default SearchMessage
