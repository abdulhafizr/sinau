import {ICBackArrow} from '../../../assets'
import './index.css'

function TopNavigation({label, type}) {
    return (
        <div className="top__navigation">
            {
                type !== "text-only" && (
                    <img src={ICBackArrow} alt="Back"/>
                )
            }
            <p className="navigation">{label}</p>
        </div>
    )
}

export default TopNavigation
