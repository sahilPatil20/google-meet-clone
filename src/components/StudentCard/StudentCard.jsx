import "./StudentCard.css"

function StudentCard({name, img}) {
  return (
    <>
        <div className="Student-card-container">
            <img src={img} className="student-card-img" />
            <h4 className="student-card-name">{name}</h4>
        </div>
    </>
  )
}

export default StudentCard