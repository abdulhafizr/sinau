import {DMProgressBar, ICList} from '../../../assets'
import './index.css'

function TableClassProgress({type, body}) {
    
    const onCheck = (event) => {
        event.target.parentElement.parentElement
            .classList.toggle('shadow-lg')
    }

    if(type === 'header') {
        return (
            <div className="table__progress header">
                <div className="table__progress-checkbox--wrapper">
                    <input type="checkbox" name="table__progress-checkbox" id="table__progress-checkbox"/>
                </div>
                <p className="table__progress-header">Class Name</p>
                <p className="table__progress-header">Category</p>
                <p className="table__progress-header">Description</p>
                <p className="table__progress-header">Progress</p>
                <p className="table__progress-header">Status</p>
                <p className="table__progress-header">Score</p>
                <p className="table__progress-header"></p>
            </div>
        )
    }
    return (
        <div className="table__progress body">
            <div className="table__progress-checkbox--wrapper">
                <input type="checkbox" 
                    name="table__progress-checkbox" 
                    onClick={(event) => onCheck(event)}
                    id="table__progress-checkbox"
                />
            </div>
            <p className="table__progress-body">{body.name}</p>
            <p className="table__progress-body">{body.category}</p>
            <p className="table__progress-body">{body.description}</p>
            <img 
                src={DMProgressBar} 
                className="table__progress-body progress__class" 
                alt="progress"
            />
            <p className="table__progress-body">
                <span className="btn-status">{body.status}</span>
            </p>
            <p className="table__progress-body score">{body.score}</p>
            <img 
                src={ICList} 
                className="table__progress-body"
                alt="list" 
            />
        </div>
    )
}

export default TableClassProgress
