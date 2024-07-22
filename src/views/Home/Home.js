import "./Home.css"
import StudentCard from "../../components/StudentCard/StudentCard";
import img1 from "../../components/StudentCard/img1.jpg"
function Home() {
  return (
    <div className="StudentCard-container">
        <StudentCard name='Sahil' img={img1}/>
        <StudentCard name='Sahil' img={img1}/>
    </div>
  )
}

export default Home