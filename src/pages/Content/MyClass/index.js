import {useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import ClassProgress from '../ClassProgress'
import {TopNavigation, SearchMyClass, TableClassProgress, Gap, Pagination} from '../../../components'
import './index.css'

function MyClass() {
    const route = useHistory()
    const currentRoute = useRouteMatch()
    return (
        <Switch>
            
            <Route path={`${currentRoute.url}/class-progress`}>
                <ClassProgress />
            </Route>

            <Route path={currentRoute.url}>
                <div className="my__class">
                    <TopNavigation 
                        label="My class" 
                        onClick={route.goBack} 
                    />
                    <div className="my__class-header">
                        <SearchMyClass />
                        <div className="sort-by-wrapper">
                            <span className="sortby__label">Sort by : </span>
                            <select className="form-select sort-by" aria-label="Default select example">
                                <option value="1">All Categories</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <Gap height={16} />
                    <TableClassProgress 
                        onClick={() => route.push(`${currentRoute.url}/class-progress`)}
                    />
                    <Gap height={32} />
                    <Pagination />
                </div>
            </Route>
        </Switch>
    )
}

export default MyClass
