import { Link } from "react-router-dom";
import { fetchStudents } from "../features/students/studentsSlice";
import StudentList from "../features/students/StudentList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { students, loadingState, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStudents());
  });
  return (
    <>
      <main className="container">
        <h2>Student View</h2>
        <Link to="/addStudent" className="btn btn-warning text-decoration-none">
          Add Student
        </Link>
        {loadingState === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <StudentList students={students} />
      </main>
    </>
  );
};
export default Home;
