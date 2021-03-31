import {ClassDetailHeader, ClassInformation, TopNavigation} from '../../components'
import {useHistory} from 'react-router-dom'
import './index.css'

function ClassDetail() {
    const route = useHistory()
    return (
        <div className="class__detail">
            <TopNavigation label="Know more Javascript" onClick={route.goBack} />
            <div className="class__detail-body">
                <ClassDetailHeader type="class-detail" />
                <div className="class__detail-information">
                    <div className="class__detail-information-header">
                        <p className="active">Information</p>
                        <p>Class Progress</p>
                        <p>Class Discussion</p>
                    </div>
                    
                    <ClassInformation />
                </div>
            </div>
        </div>
    )
}

export default ClassDetail
