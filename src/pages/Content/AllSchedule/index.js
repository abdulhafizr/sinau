import {Row, Col} from 'reactstrap'
import {News} from '../../../components'
import './index.css'

function AllSchedule() {
    return (
        <div className="all-schedule">
            <Row>
                <Col className="all-schedule__main">
                    <News />
                </Col>
                <Col className="all-schedule__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita alias amet? Cum sequi, recusandae maiores nisi quidem non ab, quasi nihil consequuntur alias velit similique suscipit, omnis corporis quis.
                </Col>
            </Row>
        </div>
    )
}

export default AllSchedule
