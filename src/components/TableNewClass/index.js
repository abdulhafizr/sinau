import {ICList} from '../../assets'
import './index.css'

function TableNewClass({onClick}) {
    
    return (
        <div className="table__new-class">
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Level</th>
                        <th>Pricing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="shadow-sm">
                        <td>Know more Javascript</td>
                        <td>Software</td>
                        <td>Javascript from the basic for...</td>
                        <td>Beginner</td>
                        <td>Free</td>
                        <td>
                            <span 
                                className="btn-register" 
                                onClick={onClick}
                            >Register</span>
                        </td>
                        <td>
                            <img src={ICList} alt="list"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableNewClass
