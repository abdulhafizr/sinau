import {useRouteMatch, useHistory, Switch, Route} from 'react-router-dom'
import ClassProgress from '../ClassProgress'
import {TopNavigation, TableClassProgress, Pagination} from '../../components'
import {ICSearch} from '../../assets'
import './index.css'

const classProgress = [
    {
        name:"HTML Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:100
    },
    {
        name:"CSS Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:42
    },
    {
        name:"Javascript Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:21
    },
    {
        name:"Responsive Layout",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:98
    },
    {
        name:"Mid-term Exam",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:86
    },
    {
        name:"Bootstrap4 Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:72
    },
    {
        name:"Sass Essential Training",
        schedule:"friday, 6 November 2020 08.00 - 09.40",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:null
    },
    {
        name:"Learning React.js",
        schedule:"friday, 13 November 2020 08.00 - 09.40",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:null
    },
    {
        name:"UX for Web Design",
        schedule:"friday, 20 November 2020 08.00 - 09.40",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:null
    },
    {
        name:"Final-term Exam",
        schedule:"friday, 27 November 2020 08.00 - 09.40",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        status: "Ongoing",
        score:null
    }
]

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
                        data={classProgress}
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
