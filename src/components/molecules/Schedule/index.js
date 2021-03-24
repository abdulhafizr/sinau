import {DMProgressBar} from '../../../assets'
import './index.css'

function Schedule() {
    return (
        <div className="schedule">
            <h1 className="schedule__title">All schedule <span>For you</span></h1>
            <div className="schedule__user">
                <div className="schedule__user-persection">
                    <div className="schedule__time">
                        <h1>08.00 - 09.40</h1>
                    </div>
                    <div className="schedule__items">
                        <div className="schedule__item">
                            <p>Introduction to Banking Finance</p>
                            <img src={DMProgressBar} alt="Your Progress"/>
                        </div>
                        <div className="schedule__item">
                            <p>Trygonometry</p>
                            <img src={DMProgressBar} alt="Your Progress"/>
                        </div>
                    </div>
                </div>
                <div className="schedule__user-persection">
                    <div className="schedule__time">
                        <h1>11.00 - 11.40</h1>
                    </div>
                    <div className="schedule__items">
                        <div className="schedule__item">
                            <p>History of Europe</p>
                            <img src={DMProgressBar} alt="Your Progress"/>
                        </div>
                    </div>
                </div>
                <div className="schedule__user-persection">
                    <div className="schedule__time">
                        <h1>13.00 - 15.30</h1>
                    </div>
                    <div className="schedule__items">
                        <div className="schedule__item">
                            <p>Fundamental of Front End Development</p>
                            <img src={DMProgressBar} alt="Your Progress"/>
                        </div>
                        <div className="schedule__item">
                            <p>Molecular Biology</p>
                            <img src={DMProgressBar} alt="Your Progress"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
