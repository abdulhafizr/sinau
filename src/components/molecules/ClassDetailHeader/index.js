import {DMClassDetail} from '../../../assets'
import './index.css'

function Calendar({type}) {
    if(type === 'class-detail') {
        return (
            <div className="class__detail-header">
                <div className="class__photo">
                    <img src={DMClassDetail} alt="class detail"/>
                </div>
                <div className="class__information">
                    <h1 className="class__name">Know More Javascript</h1>
                    <div className="class__info">
                        <p className="class__info-item">Level : Beginner</p>
                        <p className="class__info-item">Category : Software</p>
                        <p className="class__info-item">Price : Free</p>
                    </div>
                </div>
                <button className="btn__register">Register</button>
            </div>
        )
    }
    return (
        <div className="class__detail-header">
            <div className="class__photo">
                <img src={DMClassDetail} alt="class detail"/>
            </div>
            <div className="class__information">
                <h1 className="class__name">Know More Javascript</h1>
                <div className="class__info">
                    <p className="class__info-item">Level : Beginner</p>
                    <p className="class__info-item">Category : Software</p>
                    <p className="class__info-item">Price : Free</p>
                </div>
            </div>
            <div className="score__class">
                <p>Your Score</p>
                <h1>86</h1>
            </div>
        </div>
    )
}

export default Calendar
