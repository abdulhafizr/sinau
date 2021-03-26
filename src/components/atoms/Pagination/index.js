import {ICPaginateLeft, ICPaginateRight} from '../../../assets'
import './index.css'

function Pagination() {
    return (
        <div className="pagination">
            <p className="pagination__info">Showing 10 out of 64</p>

            <ul className="pagination__body">
                <li className="pagination__item shadow">
                    <img src={ICPaginateLeft} alt="prev"/>
                </li>
                <li className="pagination__item shadow active"><span>1</span></li>
                <li className="pagination__item shadow"><span>2</span></li>
                <li className="pagination__item shadow"><span>3</span></li>
                <li className="pagination__item shadow"><span>4</span></li>
                <li className="pagination__item shadow"><span>5</span></li>
                <li className="pagination__item shadow">
                    <img src={ICPaginateRight} alt="next"/>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
