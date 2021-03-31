import {useHistory} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
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
                    <Messages 
                        data={users}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ForYou
