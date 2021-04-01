import {Link, useHistory, useRouteMatch} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import {TableClassProgress, TableNewClass, TopNavigation, Pagination} from '../../components'
import {ICRightArrow, ICSearch} from '../../assets'
import './index.css'

const myClass = [
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
    }
]

const newClass = [
    {
        name:"HTML Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        pricing: "Free",
        level: "Beginer"
    },
    {
        name:"CSS Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        pricing: "Free",
        level: "Beginer"
    },
    {
        name:"Javascript Essential Training",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        pricing: "Free",
        level: "Beginer"
    },
    {
        name:"Responsive Layout",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        pricing: "Free",
        level: "Beginer"
    },
    {
        name:"Mid-term Exam",
        schedule:"You have completed this topic",
        category: "Software",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, consequatur!",
        pricing: "Free",
        level: "Beginer"
    }
]


function Activity() {

    const route = useHistory()
    let {url} = useRouteMatch();

    return (
        <div className="activity">
            <TopNavigation label="Activity" type="text-only" />
            
            {/* MyClass Section */}
            <h1 className="activity__label">My class</h1>
            
            <div className="my_class">
                <TableClassProgress
                    data={myClass}
                    onClick={() => route.push(`${url}/my-class/class-progress`)}
                />

                <Link to={`${url}/my-class`} className="my_class--view-all">
                    <p>view all</p>
                    <img src={ICRightArrow} alt=">"/>
                </Link>
            </div>

            {/* New Class Section */}
            <div className="new__class">
                
                <h1 className="new__class-label">New class</h1>

                <div className="new__class-search">
                    
                    {/* Search New Class */}
                    <div className="new__class-search-input">
                        <img src={ICSearch} alt="Search"/>
                        <input type="text" placeholder="Quick Search"/>
                        <button className="btn__search-new-class">Search</button>
                    </div>

                    {/* Search New Class Options */}
                    <div className="new__class-search-option">
                        {/* Category Button Option */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" size="sm" id="category">
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* Level Button Option */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" size="sm" id="level">
                                Level
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        {/* Pricing Button Option */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" size="sm" id="pricing">
                                Pricing
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

                {/* Tables New Class Section */}
                <TableNewClass 
                    data={newClass}
                    onClick={() => route.push(`${url}/class-detail`)}
                />

                {/* Pagination Section */}
                <Pagination />
            </div>
        </div>
    )
}

export default Activity
