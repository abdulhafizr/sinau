import {ICCalendar} from '../../../assets'
import './index.css'

function Calendar() {
    return (
        <div className="calendar">
            <div className="calendar__header">
                <h1 className="calendar__title">Today, October 16</h1>
                <img src={ICCalendar} alt="calendar icon"/>
            </div>

        </div>
    )
}

export default Calendar
