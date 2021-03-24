import {ICCalendar} from '../../../assets'
import './index.css'

const calendar = [
    {day: 'Mo', date: 12},
    {day: 'To', date: 13},
    {day: 'We', date: 14},
    {day: 'Th', date: 15},
    {day: 'Fr', date: 16},
    {day: 'Sa', date: 17},
    {day: 'Su', date: 18},
]

function Calendar() {
    return (
        <div className="calendar">
            <div className="calendar__header">
                <h1 className="calendar__title">Today, October 16</h1>
                <img src={ICCalendar} alt="calendar icon"/>
            </div>
            <div className="calendar__body">
                {
                    calendar.map((cal, index) => (
                        <div className={`calendar__item ${(cal.date === 17) && 'active'}`} key={index}>
                            <h1>{cal.day}</h1>
                            <p>{cal.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calendar
