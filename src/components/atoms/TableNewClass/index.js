import {ICList} from '../../../assets'
import './index.css'

function TableNewClass({type}) {
    return (
        <div className="table__new-class">
            <table>
                <tr>
                    <th>Class Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Level</th>
                    <th>Pricing</th>
                </tr>
                <tr className="shadow-sm">
                    <td>Know more Javascript</td>
                    <td>Software</td>
                    <td>Javascript from the basic for...</td>
                    <td>Beginner</td>
                    <td>Free</td>
                    <td>
                        <span className="btn-register">Register</span>
                    </td>
                    <td>
                        <img src={ICList} alt="list"/>
                    </td>
                </tr>
                <tr className="shadow-sm">
                    <td>Know more Javascript</td>
                    <td>Software</td>
                    <td>Javascript from the basic for...</td>
                    <td>Beginner</td>
                    <td>Free</td>
                    <td>
                        <span className="btn-register">Register</span>
                    </td>
                    <td>
                        <img src={ICList} alt="list"/>
                    </td>
                </tr>
                <tr className="shadow-sm">
                    <td>Know more Javascript</td>
                    <td>Software</td>
                    <td>Javascript from the basic for...</td>
                    <td>Beginner</td>
                    <td>Free</td>
                    <td>
                        <span className="btn-register">Register</span>
                    </td>
                    <td>
                        <img src={ICList} alt="list"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default TableNewClass
