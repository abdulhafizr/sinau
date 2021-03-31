import {useHistory, useRouteMatch} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
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
                    <Messages 
                        data={users}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
