import { Link, useParams } from "react-router-dom"
import plus from "../images/plus.png";
import list from "../images/list.png";
import edit from "../images/edit.png";

const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const employee = employees.find(e => e.id === id );

    return (
        <div className="container">
            <h2 className="heading">Employee Details</h2>

            <div className="btnGroup">
                <Link className="btn" to="/create" style={{ width: "157px"}}>
                    <img src={plus} alt="addEmployee" />
                    Add new employee
                </Link>
                
                <Link className="btn" to="/">
                    List of employees
                    <img src={list} alt="addEmployee" />
                </Link>
            </div>

            <div className="info">
                <div>
                    <label htmlFor="firstName">Full name</label>
                    <p>{`${employee.firstName} ${employee.lastName}`}</p>
                </div>
                
                <div>
                    <label htmlFor="lastName">Email</label>
                    <p>{employee.email}</p>
                </div>

                <Link className="btn" to={`/${id}/update`}>
                    Edit Employee
                    <img src={edit} alt="addEmployee" />
                </Link>
            </div>
        </div>
    );
}
 
export default EmployeeDetails;