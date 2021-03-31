import {DMProgressBar} from '../../assets'
import './index.css'

function Schedule({onClick, schedules = []}) {
    return (
        <div className="schedule">
            <h1 
                className="schedule__title"
                onClick={onClick}
            >All schedule <span>For you</span></h1>
            <div className="schedule__user">
                {
                    schedules.map((schedule, index) => (
                        
                        <div className="schedule__user-persection" key={index}>
                            <div className="schedule__time">
                                <h1>{schedule.time}</h1>
                            </div>
                            <div className="schedule__items">
                                
                                {
                                    schedule.schedules.map((classUser, index) => (
                                        <div className="schedule__item" key={index}>
                                            <p>{classUser}</p>
                                            <img src={DMProgressBar} alt="Your Progress"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Schedule
