import {SearchNewClass, TableClassProgress, TableNewClass, TopNavigation, Gap, Pagination} from '../../../components'
import {Link, useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import MyClass from '../MyClass'
import ClassDetail from '../ClassDetail'
import ClassProgress from '../ClassProgress'
import {ICRightArrow} from '../../../assets'
import './index.css'

function Activity() {

    const route = useHistory()
    const currentRoute = useRouteMatch()

    return (
        <Switch>
            
            <Route path={`${currentRoute.url}/my-class`}>
                <MyClass />
            </Route>
            
            <Route path={`${currentRoute.url}/class-detail`}>
                <ClassDetail />
            </Route>
            
            <Route path={`${currentRoute.url}/class-progress`}>
                <ClassProgress />
            </Route>

            <Route path={`${currentRoute.url}`}>

                <div className="activity">
                    <TopNavigation label="Activity" type="text-only" />
                    <h1 className="activity__label">My class</h1>
                    
                    <div className="my_class">

                        <TableClassProgress 
                            onClick={() => route.push(`${currentRoute.url}/my-class/class-progress`)}
                        />

                        <Link to={`${currentRoute.url}/my-class`} className="my_class--view-all">
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
