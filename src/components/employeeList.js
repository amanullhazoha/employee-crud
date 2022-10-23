import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import Table from "./common/table";
import Modal from "./common/modal";
import "../style/scss/employeeList.scss";

const EmployeeList = ({ employees, setEmployees }) => {
    const [toggler, setToggler] = useState(false);
    const [id, setId] = useState("");

    const handleToggler = (id) => {
        setId(id);
        setToggler(prev => !prev);
    }

    const handleDelete = (id) => {
        const filter = employees.filter(employee => employee.id !== id)
        setEmployees(filter);
        handleToggler("");
    }

    const columns = [
        {
            label: "First name",
            path: "firstName",
            content: (data, path) => <td>{data[path]}</td>
        },
        {
            label: "Last name",
            path: "lastName",
            content: (data, path) => <td>{data[path]}</td>
        },
        {
            label: "Email",
            path: "email",
            content: (data, path) => <td>{data[path]}</td>
        },
        {
            label: "Action",
            path: "",
            content: (data) => (
                <td className="action" >
                    <Link className="btn" to={`${data.id}/update`}>
                        Edit 
                        <img src="images/Vector (1).png" alt="edit" />
                    </Link>

                    <Link className="btn" to={`${data.id}/details`}>
                        Details 
                        <img src="images/clarity_details-line.png" alt="details" />
                    </Link>

                    <Button className="btn delete" onClick={() => handleToggler(data.id)} >
                        Delete 
                        <img src="images/akar-icons_trash-can.png" alt="edit" />
                    </Button>
                </td>
            ),
        },
    ];

    return (
        <div className="container employeeList">
            <h2 className="heading">Employee List</h2>
            <Link className="btn" to="/create" style={{ width: "157px"}}>
                <img src="images/vector (2).png" alt="addEmployee" />
                Add new employee
            </Link>

            <Table columns={columns} items={employees}/>

            {toggler && <Modal handleToggler={handleToggler} handleDelete={handleDelete} id={id} />}
        </div>
    );
}
 
export default EmployeeList;