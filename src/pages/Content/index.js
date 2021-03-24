import {Row, Col} from 'reactstrap'
import {Sidebar} from '../../components'
import './index.css'

function Content() {
  return (
    <Row className="content">
        <Col className="sidebar">
            <Sidebar />
        </Col>
        <Col className="main">
            main
        </Col>
    </Row>
  );
}

export default Content;
