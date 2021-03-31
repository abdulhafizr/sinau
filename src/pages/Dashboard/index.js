import {Row, Col} from 'reactstrap'
import {Calendar, Schedule, Messages, News} from '../../components'
import './index.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Row className="dashboard-row">
                <Col className="dashboard__main">
                    <News />
                    <div className="schedule__wrapper">
                        <Calendar />
                        <Schedule />
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
