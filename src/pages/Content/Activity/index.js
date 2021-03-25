import {TableClassProgress, TopNavigation} from '../../../components'
import {ICRightArrow} from '../../../assets'
import './index.css'

function Activity() {
    return (
        <div className="activity">
            <TopNavigation label="Activity" type="text-only" />
            <h1 className="activity__label">My class</h1>
            <div className="my__class">
                <TableClassProgress 
                    type="header"
                />
                <TableClassProgress 
                    body={
                        {
                            name: "Front-end fundamentals",
                            category: "Software",
                            description: "Learn the fundamentals of front end...",
                            status: "Ongoing",
                            score: 86
                        }
                    }
                />
                <TableClassProgress 
                    body={
                        {
                            name: "Front-end fundamentals",
                            category: "Software",
                            description: "Learn the fundamentals of front end...",
                            status: "Ongoing",
                            score: 86
                        }
                    }
                />
                <div className="my__class--view-all">
                    <p>view all</p>
                    <img src={ICRightArrow} alt=">"/>
                </div>
            </div>
        </div>
    )
}

export default Activity
