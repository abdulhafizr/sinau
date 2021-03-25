import {ICBackArrow} from '../../../assets'
import './index.css'

function TopNavigation({label}) {
    return (
        <div className="top__navigation">
            <img src={ICBackArrow} alt="Back"/>
            <p className="navigation">{label}</p>
        </div>
    )
}

export default TopNavigation
