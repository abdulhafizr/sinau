import {Switch, useRouteMatch, useHistory, Route, NavLink} from 'react-router-dom'
import {Progress} from 'reactstrap'
import {ClassDetailHeader, ClassInformation, ClassProgressUser, TopNavigation} from '../../components'
import './index.css'

const classProgress = [
    {
        name:"HTML Essential Training",
        schedule:"You have completed this topic",
        score:100
    },
    {
        name:"CSS Essential Training",
        schedule:"You have completed this topic",
        score:42
    },
    {
        name:"Javascript Essential Training",
        schedule:"You have completed this topic",
        score:21
    },
    {
        name:"Responsive Layout",
        schedule:"You have completed this topic",
        score:98
    },
    {
        name:"Mid-term Exam",
        schedule:"You have completed this topic",
        score:86
    },
    {
        name:"Bootstrap4 Essential Training",
        schedule:"You have completed this topic",
        score:72
    },
    {
        name:"Sass Essential Training",
        schedule:"friday, 6 November 2020 08.00 - 09.40",
        score:null
    },
    {
        name:"Learning React.js",
        schedule:"friday, 13 November 2020 08.00 - 09.40",
        score:null
    },
    {
        name:"UX for Web Design",
        schedule:"friday, 20 November 2020 08.00 - 09.40",
        score:null
    },
    {
        name:"Final-term Exam",
        schedule:"friday, 27 November 2020 08.00 - 09.40",
        score:null
    }
]

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
                            <ClassProgressUser 
                                data={classProgress}
                            />
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
