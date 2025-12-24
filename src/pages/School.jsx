import { fetchStudents } from "../features/students/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const School = () => {
  const dispatch = useDispatch();
  const { students, loadingState, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStudents());
  });

const totalStudent = students?.students && students?.students?.length > 0 ? students?.students?.length : 0;
const totalAttendance = students?.students && students?.students?.length > 0 ? students?.students?.reduce((acc,curr)=>acc+curr.attendance,0) : 0;
const avgAttendance = (totalAttendance/totalStudent).toFixed(2);
const totalMarks = students?.students && students?.students?.length > 0 ? students?.students?.reduce((acc,curr)=>acc+curr.marks,0) : 0;
const avgMarks = (totalMarks/totalStudent).toFixed(2);
const topStudent = students?.students && students?.students?.length > 0 ? students?.students?.reduce((acc,curr)=>acc.marks>curr.marks ? acc : curr,{}) : {};

  return (
    <>
      <main className="container">
        <h2>School View</h2>
        {loadingState === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="my-3">
                <h4 className="fw-normal">Total Students: {totalStudent}</h4>
                <h4 className="fw-normal">Average Attendance: {avgAttendance}</h4>
                <h4 className="fw-normal">Average Marks: {avgMarks}</h4>
                <h4 className="fw-normal">Top Student: {topStudent.name}</h4>
            </div>
      </main>
    </>
  );
};
export default School;