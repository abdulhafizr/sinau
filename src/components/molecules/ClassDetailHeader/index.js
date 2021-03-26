import {DMClassDetail} from '../../../assets'
import './index.css'

function Calendar() {
    return (
        <div className="class__detail-header">
            <div className="class__photo">
                <img src={DMClassDetail} alt="class detail"/>
            </div>
            <div className="class__information">
                <h1 className="class__name">Know More Javascript</h1>
                <div className="class__info">
                    <p>Level : Beginner</p>
                    <p>Category : Software</p>
                    <p>Price : Free</p>
                </div>
            </div>
            <button className="btn__register">Register</button>
        </div>
    )
}

export default Calendar
