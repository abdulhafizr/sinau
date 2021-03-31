import {DMProgressBar, ICList} from '../../assets'
import './index.css'

function TableClassProgress({onClick, data=[]}) {
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
                        data.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                                </td>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                                <td>
                                    <img 
                                        src={DMProgressBar} 
                                        onClick={onClick}
                                        alt="progress"
                                    />
                                </td>
                                <td>
                                    <span className="btn-ongoing">{data.status}</span>
                                </td>
                                <td className="score">{data.score || 0}</td>
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
