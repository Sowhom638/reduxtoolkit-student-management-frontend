import { fetchStudents } from "../features/students/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Classes = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const { students, loadingState, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStudents());
  });

let filteredStudents = students?.students || [];
if (filter) {
  filteredStudents = filteredStudents.filter(s => s.gender === filter);
}

if (sortBy) {
  filteredStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "marks") return a.marks - b.marks;
    if (sortBy === "attendance") return a.attendance - b.attendance;
    return 0;
  });
}

  return (
    <>
      <main className="container">
        <h2>Class View</h2>
        <label htmlFor="filter">Filter by Gender: </label>{' '}
        <select id="filter" value={filter} onChange={(e)=>setFilter(e.target.value)}>
          <option name="filter" value="">All</option>
          <option name="filter" value="Male">Boys</option>
          <option name="filter" value="Female">Girls</option>
        </select>
        <br />
        <br />
        <label htmlFor="sortBy">Sort by: </label>{' '}
        <select id="sortBy" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option name="sortBy" value="name">Name</option>
          <option name="sortBy" value="marks">Marks</option>
          <option name="sortBy" value="attendance">Attendance</option>
        </select>
        <br />
        {loadingState === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="my-3">
                {filteredStudents && filteredStudents.map((student)=>(
                    <li key={student._id}>
                        <p>{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}</p>
                    </li>
                ))}
            </ul>
      </main>
    </>
  );
};
export default Classes;