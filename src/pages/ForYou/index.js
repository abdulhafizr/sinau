import {useHistory} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {Calendar, Schedule, Messages, News} from '../../components'
import './index.css'

const allSchedule = [
    {
        time: "08.00 - 09.40",
        schedules: [
            "History of Europe"
        ]
    },
    {
        time: "13.00 - 15.30",
        schedules: [
            "Molecular Biology"
        ]
    }
]

function ForYou() {

    const route = useHistory()

    return (
        <div className="for__you">
            <Row className="for__you-row">
                <Col className="for__you-main">
                    <News />
                    <div className="schedule__wrapper">
                        <Calendar />
                        <Schedule 
                            onClick={() => route.push('/')}
                            schedules={allSchedule}
                        />
                    </div>
                </Col>
                <Col className="for__you-message">
                    <Messages />
                </Col>
            </Row>
        </div>
    )
}

export default ForYou
