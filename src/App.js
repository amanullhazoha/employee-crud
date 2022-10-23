import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import shortid from 'shortid'
import AddEmployee from "./components/addEmployee";
import EmployeeDetails from "./components/employeeDetails";
import EmployeeList from "./components/employeeList";
import UpdateEmployee from "./components/updateEmployee";
import "./style/scss/index.scss";

const staticValue = [
    {
        id: shortid.generate(),
        firstName: "Amanullha",
        lastName: "Zoha",
        email: "amanullha@gmail.com"
    },
    {
        id: shortid.generate(),
        firstName: "DM",
        lastName: "Maruf",
        email: "dmmaruf@gmail.com"
    },
    {
        id: shortid.generate(),
        firstName: "Shakil",
        lastName: "Hossain",
        email: "shakilhossain@gmail.com"
    }
]


const App = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(staticValue);
    }, [])

    return (
        <Routes>
            <Route path="/" element={<EmployeeList employees={employees} setEmployees={setEmployees} />} />
            <Route path="/create" element={<AddEmployee setEmployees={setEmployees} />} />
            <Route path="/:id/update" element={<UpdateEmployee setEmployees={setEmployees} employees={employees} />} />
            <Route path="/:id/details" element={<EmployeeDetails employees={employees} />} />
        </Routes>
    );
}

export default App;
