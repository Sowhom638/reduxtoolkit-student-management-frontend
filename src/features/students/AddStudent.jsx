import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "./studentsSlice";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [stdntName, setStdntName] = useState("");
  const [stdntAge, setStdntAge] = useState(0);
  const [stdntGrade, setStdntGrade] = useState("");
  const [stdntGender, setStdntGender] = useState("");
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addStudentAsync({
        name: stdntName,
        age: Number(stdntAge),
        gender: stdntGender,
        grade: stdntGrade,
      })
    );
    navigate(`/`);
  };
  return (
    <>
      <main className="container">
        <h2>Add Student</h2>
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
        <button className="btn btn-secondary" onClick={handleSubmit}>
          Add
        </button>
      </main>
    </>
  );
};
export default AddStudent;
