import {ICList} from '../../assets'
import './index.css'

function TableNewClass({onClick, data=[]}) {
    
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
                    {
                        data.map((data, index) => (
                            <tr className="shadow-sm" key={index}>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                                <td>{data.level}</td>
                                <td>{data.pricing || "Free"}</td>
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
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableNewClass
