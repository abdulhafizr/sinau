import {ICBackArrow} from '../../assets'
import './index.css'

function TopNavigation({label, type, onClick}) {
    return (
        <div className="top__navigation">
            {
                type !== "text-only" && (
                    <img src={ICBackArrow} onClick={onClick} alt="Back"/>
                )
            }
            <p className="navigation">{label}</p>
        </div>
    )
}

export default TopNavigation
