import {useHistory, useRouteMatch} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {Calendar, Schedule, Messages, News} from '../../components'
import './index.css'

const allSchedule = [
    {
        time: "08.00 - 09.40",
        schedules: [
            "Introduction to Banking Finance",
            "Trygonometry"
        ]
    },
    {
        time: "08.00 - 09.40",
        schedules: [
            "History of Europe"
        ]
    },
    {
        time: "13.00 - 15.30",
        schedules: [
            "Fundamental of Front End Development",
            "Molecular Biology"
        ]
    }
]

function Dashboard() {

    const route = useHistory()
    const {url} = useRouteMatch()

    return (
        <div className="dashboard">
            <Row className="dashboard-row">
                <Col className="dashboard__main">
                    <News />
                    <div className="schedule__wrapper">
                        <Calendar />
                        <Schedule
                            onClick={() => route.push(`${url}my`)}
                            schedules={allSchedule}
                        />
                    </div>
                </Col>
                <Col className="dashboard__message">
                    <Messages />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
