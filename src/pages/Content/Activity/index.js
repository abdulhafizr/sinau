import {SearchNewClass, TableClassProgress, TableNewClass, TopNavigation, Gap, Pagination} from '../../../components'
import {Link, useRouteMatch, Switch, Route} from 'react-router-dom'
import MyClass from '../MyClass'
import {ICRightArrow} from '../../../assets'
import './index.css'

function Activity() {

    const match = useRouteMatch()

    return (
        <Switch>
            <Route path={`${match.url}/myclass`}>
                <MyClass />
            </Route>

            <Route path={`${match.url}`}>

                <div className="activity">
                    <TopNavigation label="Activity" type="text-only" />
                    <h1 className="activity__label">My class</h1>
                    
                    <div className="my_class">
                        <TableClassProgress />
                        <Link to={`${match.url}/myclass`} className="my_class--view-all">
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
