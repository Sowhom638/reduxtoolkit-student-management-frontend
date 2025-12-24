import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const StudentList = ({students}) => {
    
    return <>
    <ul className="my-3">
        {students?.students?.map((student)=>(
            <li key={student._id}>
                <Link className="text-decoration-none" to={`/studentDetails/${student._id}`}>{student.name} (Age: {student.age}) <FaArrowRight/></Link>
            </li>
        ))}
    </ul>
    </>
}
export default StudentList;