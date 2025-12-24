import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchStudents, deleteStudentAsync } from "./studentsSlice";

const StudentDetails = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loadingState, error } = useSelector((state) => state);
    useEffect(() => {
    dispatch(fetchStudents());
  });
  const foundedStudent = students?.students?.find(
    (student) => student._id == studentId
  );

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteStudentAsync(studentId));
    navigate("/");
  }
  return (
    <>
      <main className="container">
        {loadingState === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h2>Student Detail</h2>
        <br/>
        <p>Name: {foundedStudent?.name || "Unknown"}</p>
        <p>Age: {foundedStudent?.age || "Unknown"}</p>
        <p>Grade: {foundedStudent?.grade || "Unknown"}</p>
        <p>Attendance: {foundedStudent?.attendance || "Unknown"}</p>
        <p>Marks: {foundedStudent?.marks || "Unknown"}</p>
        <br/>
        <Link className="btn btn-warning text-decoration-none text-dark" to={`/editStudent/${studentId}`}>Edit Details</Link>
        <button onClick={handleDelete} className="btn btn-danger mx-1">Delete</button>
      </main>
    </>
  );
};
export default StudentDetails;
