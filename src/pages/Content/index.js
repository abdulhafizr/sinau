import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import {Sidebar} from '../../components'
import AllSchedule from './AllSchedule'
import './index.css'

function Content() {
  return (
    <Router>
      <Row className="content">
          <Col className="sidebar">
              <Sidebar />
          </Col>
          <Col className="main">
              <Switch>
                <Route exact path="/">
                  <AllSchedule />
                </Route>
                <Route path="/activity">
                  Activity
                </Route>
                <Route path="/help">
                  Help
                </Route>
                <Route path="/logout">
                  Logout
                </Route>
              </Switch>
          </Col>
      </Row>
    </Router>
  );
}

export default Content
