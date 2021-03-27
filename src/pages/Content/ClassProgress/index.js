import {Switch, useRouteMatch, useHistory, Route, NavLink} from 'react-router-dom'
import {Progress} from 'reactstrap'
import {ClassDetailHeader, ClassInformation, ClassProgressUser, TopNavigation} from '../../../components'
import './index.css'

function ClassProgress() {
    const route = useHistory()
    const currentRoute = useRouteMatch()
    return (
        <div className="class__progress">
            <TopNavigation label="Know more Javascript" onClick={route.goBack} />
            <div className="class__progress-body">
                <ClassDetailHeader />
                <div className="class__progress-information">
                    <div className="class__progress-percentage">
                     <p>80% to complete</p>
                     <Progress value={80} />
                    </div>

                    <div className="class__progress-information-header">
                        <NavLink activeClassName="active" to={currentRoute.url} exact>Information</NavLink>
                        <NavLink activeClassName="active" to={`${currentRoute.url}/progress`}>Class Progress</NavLink>
                        <NavLink activeClassName="active" to={`${currentRoute.url}/class-discussion`}>Class Discussion</NavLink>
                    </div>
                    
                    <Switch>
                        <Route exact path={currentRoute.url}>
                            <ClassInformation />
                        </Route>
                        <Route path={`${currentRoute.url}/progress`}>
                            <ClassProgressUser />
                        </Route>
                        <Route path={`${currentRoute.url}/class-discussion`}>
                            Class Discussion
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ClassProgress
