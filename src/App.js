import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Activity, Dashboard, ForYou, Profile} from './pages'
import {Row, Col} from 'reactstrap'
import {Sidebar} from './components'

function App() {
  return (
    <BrowserRouter>

      <Row className="content">
          <Col className="sidebar">
            <Sidebar />
          </Col>

          <Col className="main">
            
              <Switch>
                {/* Dashboard */}
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/my">
                  <ForYou />
                </Route>
                
                {/* Profile */}
                <Route path="/profile">
                  <Profile />
                </Route>
                
                {/* Activity */}
                <Route path="/activity">
                  <Activity />
                </Route>

                {/* Other */}
                <Route path="/help">
                  Help
                </Route>
                <Route path="/logout">
                  Logout
                </Route>
              </Switch>

          </Col>
      </Row>

    </BrowserRouter>
  );
}

export default App
