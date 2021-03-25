import {SearchNewClass, TableClassProgress, TableNewClass, TopNavigation, Gap} from '../../../components'
import {ICRightArrow} from '../../../assets'
import './index.css'

function Activity() {
    return (
        <div className="activity">
            <TopNavigation label="Activity" type="text-only" />
            <h1 className="activity__label">My class</h1>
            
            <div className="my__class">
                <TableClassProgress />
                <div className="my__class--view-all">
                    <p>view all</p>
                    <img src={ICRightArrow} alt=">"/>
                </div>
            </div>
            
            <div className="new__class">
                <h1 className="new__class-label">New class</h1>
                <SearchNewClass />
                
                <Gap height={32} />
                
                <TableNewClass />
            </div>
        </div>
    )
}

export default Activity
