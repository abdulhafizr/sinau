import {useHistory} from 'react-router-dom'
import {TopNavigation, SearchMyClass, TableClassProgress, Gap, Pagination} from '../../../components'
import './index.css'

function MyClass() {
    const history = useHistory()
    return (
        <div className="my__class">
            <TopNavigation 
                label="My class" 
                onClick={history.goBack} 
            />
            <div className="my__class-header">
                <SearchMyClass />
                <select name="sortby" id="sortby">
                    <option value="sortby1">Sortby 1</option>
                    <option value="sortby2">Sortby 2</option>
                    <option value="sortby3">Sortby 3</option>
                </select>
            </div>
            <Gap height={16} />
            <TableClassProgress />
            <Gap height={32} />
            <Pagination />
        </div>
    )
}

export default MyClass
