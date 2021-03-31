import './index.css'

function ClassProgressUser({data=[]}) {
    return (
        <div className="class__progress-user">
            <table className="class__progress-user-table">
                <tbody>
                    {
                        data.map((classProgress, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" name="table__class-progress-checked-body" id="table__class-progress-checked-body"/>
                                </td>
                                <td>{classProgress.name}</td>
                                <td className={classProgress.score === null ? "unfinished" : ""}>{classProgress.schedule}</td>
                                <td>{classProgress.score || ""}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ClassProgressUser
