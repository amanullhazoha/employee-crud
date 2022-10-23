import { Link, useParams } from "react-router-dom"

const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const employee = employees.find(e => e.id === id );

    return (
        <div className="container">
            <h2 className="heading">Employee Details</h2>

            <div className="btnGroup">
                <Link className="btn" to="/create" style={{ width: "157px"}}>
                    <img src="images/vector (2).png" alt="addEmployee" />
                    Add new employee
                </Link>
                
                <Link className="btn" to="/">
                    List of employees
                    <img src="images/vector (3).png" alt="addEmployee" />
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
                    <img src="images/vector (4).png" alt="addEmployee" />
                </Link>
            </div>
        </div>
    );
}
 
export default EmployeeDetails;