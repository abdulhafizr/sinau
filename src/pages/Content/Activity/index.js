import {SearchNewClass, TableClassProgress, TableNewClass, TopNavigation, Gap, Pagination} from '../../../components'
import {Link, useRouteMatch, useHistory, Switch, Route} from 'react-router-dom'
import {ICRightArrow} from '../../../assets'
import './index.css'

function Activity() {

    const match = useRouteMatch()
    const route = useHistory()

    return (
        <Switch>
            <Route path={`${match.url}/myclass`}>
                <button onClick={route.goBack}>Go back</button>
            </Route>

            <Route path={`${match.url}`}>
                <div className="activity">
                    <TopNavigation label="Activity" type="text-only" />
                    <h1 className="activity__label">My class</h1>
                    
                    <div className="my__class">
                        <TableClassProgress />
                        <Link to={`${match.url}/myclass`} className="my__class--view-all">
                            <p>view all</p>
                            <img src={ICRightArrow} alt=">"/>
                        </Link>
                    </div>
                    
                    <div className="new__class">
                        <h1 className="new__class-label">New class</h1>
                        <SearchNewClass />
                        <Gap height={32} />
                        <TableNewClass />
                        <Gap height={40} />
                        <Pagination />
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default Activity
