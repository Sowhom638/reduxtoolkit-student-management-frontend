import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStudents, updateStudentAsync } from "./studentsSlice";

const EditStudent = () => {
  const { studentId } = useParams();
  const [stdntName, setStdntName] = useState("");
  const [stdntAge, setStdntAge] = useState(0);
  const [stdntGrade, setStdntGrade] = useState("");
  const [stdntGender, setStdntGender] = useState("");
  const [stdntAttendance, setStdntAttendance] = useState(0);
  const [stdntMarks, setStdntMarks] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loadingState, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStudents());
  });

  useEffect(() => {
    const foundedStudent = students?.students?.find(
      (student) => student._id == studentId
    );
    if (foundedStudent) {
      setStdntName(foundedStudent?.name || "");
      setStdntAge(foundedStudent?.age || 0);
      setStdntGrade(foundedStudent?.grade || "");
    }
  }, [students, studentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateStudentAsync({studentId, studentData: {
        name: stdntName,
        age: Number(stdntAge),
        gender: stdntGender,
        marks: Number(stdntMarks),
        attendance: Number(stdntAttendance),
        grade: stdntGrade,
      }})
    );
    navigate(`/studentDetails/${studentId}`)
  };
  return (
    <>
      <main className="container">
        {loadingState === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h2>Edit Student</h2>
        <input
          className="my-2"
          type="text"
          placeholder="Name"
          value={stdntName}
          onChange={(e) => setStdntName(e.target.value)}
        />
        <br />
        <input
          className="my-2"
          type="number"
          placeholder="Age"
          value={stdntAge}
          onChange={(e) => setStdntAge(e.target.value)}
        />
        <br />
        <input
          className="my-2"
          type="text"
          placeholder="Grade"
          value={stdntGrade}
          onChange={(e) => setStdntGrade(e.target.value)}
        />
        <br />
        <div>
          <label htmlFor="gender">Gender:</label>{" "}
          <input
            name="gender"
            id="gender"
            type="radio"
            value="Male"
            onChange={(e) => setStdntGender(e.target.value)}
            checked={stdntGender==="Male"}
          />
          Male{" "}
          <input
            name="gender"
            id="gender"
            type="radio"
            value="Female"
            onChange={(e) => setStdntGender(e.target.value)}
            checked={stdntGender==="Female"}
          />
          Female
        </div>
        <br />
        <input
          className="my-2"
          type="number"
          placeholder="Attendance"
          value={stdntAttendance}
          onChange={(e) => setStdntAttendance(e.target.value)}
        />
        <br />
        <input
          className="my-2"
          type="number"
          placeholder="Marks"
          value={stdntMarks}
          onChange={(e) => setStdntMarks(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </main>
    </>
  );
};
export default EditStudent;
