import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./features/students/AddStudent";
import EditStudent from "./features/students/EditStudent";
import StudentDetails from "./features/students/StudentDetails";
import Classes from "./pages/Classes";
import School from "./pages/School";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container container-fluid">
              <Link className="navbar-brand" to="/">
                Student Management System
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">
                    Students
                  </Link>
                  <Link className="nav-link" to="/classes">
                    Classes
                  </Link>
                  <Link className="nav-link" to="/school">School</Link>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route
              path="/studentDetails/:studentId"
              element={<StudentDetails />}
            />
            <Route path="/editStudent/:studentId" element={<EditStudent />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/school" element={<School />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
