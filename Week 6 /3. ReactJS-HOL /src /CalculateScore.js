function calcScore(actual, expected) {
    return actual * 100 /expected
}

function CalculateScore(props) {
    return(
        <div className="report">
            <h3> Student Details</h3>
            <p className="studentName">Student : {props.name}</p>
            <p className="studentSchool">School : {props.school}</p>
            <p className="total">Total : {props.total}</p>
            <p className="percent">Percent : {calcScore(props.total,props.goal)} %</p>
        </div>
    )
}

export default CalculateScore
