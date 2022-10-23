import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import Table from "./common/table";
import Modal from "./common/modal";
import "../style/scss/employeeList.scss";
import plus from "../images/plus.png";
import edit from "../images/edit.png";
import details from "../images/details.png";
import deleted from "../images/delete.png";

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
                        <img src={edit} alt="edit" />
                    </Link>

                    <Link className="btn" to={`${data.id}/details`}>
                        Details 
                        <img src={details} alt="details" />
                    </Link>

                    <Button className="btn delete" onClick={() => handleToggler(data.id)} >
                        Delete 
                        <img src={deleted} alt="edit" />
                    </Button>
                </td>
            ),
        },
    ];

    return (
        <div className="container employeeList">
            <h2 className="heading">Employee List</h2>
            <Link className="btn" to="/create" style={{ width: "157px"}}>
                <img src={plus} alt="addEmployee" />
                Add new employee
            </Link>

            <Table columns={columns} items={employees}/>

            {toggler && <Modal handleToggler={handleToggler} handleDelete={handleDelete} id={id} />}
        </div>
    );
}
 
export default EmployeeList;