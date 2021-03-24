import {Row, Col} from 'reactstrap'
import {Sidebar} from '../../components'
import AllSchedule from './AllSchedule'
import './index.css'

function Content() {
  return (
    <Row className="content">
        <Col className="sidebar">
            <Sidebar />
        </Col>
        <Col className="main">
            <AllSchedule />
        </Col>
    </Row>
  );
}

export default Content
