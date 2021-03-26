import {TopNavigation, ClassDetailHeader} from '../../../components'
import {useHistory} from 'react-router-dom'
import './index.css'

function ClassDetail() {
    const route = useHistory()
    return (
        <div className="class__detail">
            <TopNavigation label="Know more Javascript" onClick={route.goBack} />
            <div className="class__detail-body">
                <ClassDetailHeader />
            </div>
        </div>
    )
}

export default ClassDetail
