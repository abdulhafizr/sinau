import {useRouteMatch, useHistory, Switch, Route} from 'react-router-dom'
import ClassProgress from '../ClassProgress'
import {TopNavigation, TableClassProgress, Pagination} from '../../components'
import {ICSearch} from '../../assets'
import './index.css'

function MyClass() {
    
    const route = useHistory()
    const {path, url} = useRouteMatch()

    return (
        <Switch>
            {/* My Class */}
            <Route exact path={`${path}`}>
                <div className="my__class">
                    <TopNavigation 
                        label="My class"
                        onClick={route.goBack}
                    />

                    <div className="my__class-header">
                        {/* Search My Class */}
                        <div className="my__class-search">
                            <div className="my__class-search-input">
                                <img src={ICSearch} alt="Search"/>
                                <input type="text" placeholder="Quick Search"/>
                                <button className="btn__search-class">Search</button>
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="sort-by-wrapper">
                            <span className="sortby__label">Sort by : </span>
                            <select className="form-select sort-by" aria-label="Default select example">
                                <option value="1">All Categories</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    {/* Table Class Progress */}
                    <TableClassProgress 
                        onClick={() => route.push(`${url}/class-progress`)}
                    />
                    
                    {/* Pagination */}
                    <Pagination />
                </div>
            </Route>
            
            {/* Class Progress */}
            <Route path={`${path}/class-progress`}>
                <ClassProgress />
            </Route>
        </Switch>
    )
}

export default MyClass
