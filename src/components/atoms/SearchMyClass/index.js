import {ICSearch} from '../../../assets'
import './index.css'

function SearchMyClass() {
    return (
        <div className="my__class-search">
            <div className="my__class-search-input">
                <img src={ICSearch} alt="Search"/>
                <input type="text" placeholder="Quick Search"/>
                <button className="btn__search-class">Search</button>
            </div>
        </div>
    )
}

export default SearchMyClass
