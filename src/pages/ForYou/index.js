import {Row, Col} from 'reactstrap'
import {Calendar, Schedule, Messages, News} from '../../components'
import './index.css'

function ForYou() {
    return (
        <div className="for__you">
            <Row className="for__you-row">
                <Col className="for__you-main">
                    <News />
                    <h1>for you</h1>
                    <div className="schedule__wrapper">
                        <Calendar />
                        <Schedule />
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
