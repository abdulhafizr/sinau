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
                        <select name="sortby" id="sortby">
                            <option value="sortby1">Sortby 1</option>
                            <option value="sortby2">Sortby 2</option>
                            <option value="sortby3">Sortby 3</option>
                        </select>
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
