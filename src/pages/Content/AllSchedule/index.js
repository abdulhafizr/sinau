import {Row, Col} from 'reactstrap'
import {Calendar, Schedule, Gap, Messages, News} from '../../../components'
import './index.css'

function AllSchedule() {
    return (
        <div className="all-schedule">
            <Row>
                <Col className="all-schedule__main">
                    <News />
                    <Gap height={33} />
                    <div className="schedule__wrapper">
                        <Calendar />
                        <Gap height={21} />
                        <Schedule />
                    </div>
                </Col>
                <Col className="all-schedule__message">
                    <Messages />
                </Col>
            </Row>
        </div>
    )
}

export default AllSchedule
