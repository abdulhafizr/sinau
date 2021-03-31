import {useState} from 'react';
import {Link, useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import {TableClassProgress, TableNewClass, TopNavigation, Pagination} from '../../components'
import {ICRightArrow, ICSearch, ICBottomArrow} from '../../assets'
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
    let { path, url } = useRouteMatch();

    const [dropdownCategory, setDropdownCategory] = useState(false)
    const [dropdownLevel, setDropdownLevel] = useState(false)
    const [dropdownPricing, setDropdownPricing] = useState(false)
    
    const toggleOptionSearchNewClass = (toggler) => toggler(prevState => !prevState);

    return (
        <Switch>

            {/* Activity */}
            <Route exact path={path}>
                
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
                                <Dropdown isOpen={dropdownCategory} toggle={() => toggleOptionSearchNewClass(setDropdownCategory)}>
                                    <DropdownToggle className="btn-option" caret>
                                        Categories
                                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Category 1</DropdownItem>
                                        <DropdownItem>Category 2</DropdownItem>
                                        <DropdownItem>Category 3</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                {/* Level Button Option */}
                                <Dropdown isOpen={dropdownLevel} toggle={() => toggleOptionSearchNewClass(setDropdownLevel)}>
                                    <DropdownToggle className="btn-option" caret>
                                        Level
                                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Level 1</DropdownItem>
                                        <DropdownItem>Level 2</DropdownItem>
                                        <DropdownItem>Level 3</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                
                                {/* Pricing Button Option */}
                                <Dropdown isOpen={dropdownPricing} toggle={() => toggleOptionSearchNewClass(setDropdownPricing)}>
                                    <DropdownToggle className="btn-option" caret>
                                        Pricing
                                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Pricing 1</DropdownItem>
                                        <DropdownItem>Pricing 2</DropdownItem>
                                        <DropdownItem>Pricing 3</DropdownItem>
                                    </DropdownMenu>
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
            </Route>

        </Switch>
    )
}

export default Activity
