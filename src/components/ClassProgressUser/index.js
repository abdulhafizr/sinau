import './index.css'

function ClassProgressUser() {
    return (
        <div className="class__progress-user">
            <table className="class__progress-user-table">
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                        </td>
                        <td>HTML Essential Training</td>
                        <td>You have completed this topic</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                        </td>
                        <td>HTML Essential Training</td>
                        <td className="unfinished">Friday, 6 November 2020 <br/> 08.00 - 09.40</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                        </td>
                        <td>Sass Essential Training</td>
                        <td className="unfinished">Friday, 6 November 2020 <br/> 08.00 - 09.40</td>
                        <td><span className="btn__unfinished">Unfinished</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClassProgressUser
