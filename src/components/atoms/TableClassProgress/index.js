import {DMProgressBar, ICList} from '../../../assets'
import './index.css'

function TableClassProgress({body}) {
    return (
        <div className="table__class-progress">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="table__class-progress-checked-header" id="table__class-progress-checked-header"/>
                        </th>
                        <th>Class Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Progress</th>
                        <th>Status</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        .map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                                </td>
                                <td>Front-end fundamentals</td>
                                <td>Software</td>
                                <td>Learn the fundamentals of front end...</td>
                                <td>
                                    <img src={DMProgressBar} alt="progress"/>
                                </td>
                                <td>
                                    <span className="btn-ongoing">Ongoing</span>
                                </td>
                                <td className="score">86</td>
                                <td>
                                    <img src={ICList} alt="option"/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableClassProgress
