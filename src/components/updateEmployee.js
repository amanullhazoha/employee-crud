import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Form from './common/form';

const UpdateEmployee = ({ employees, setEmployees }) => {
    const { id } = useParams();
    const { firstName, lastName, email } = employees.find(e => e.id === id );

    const [value, setValue] = useState({ firstName, lastName, email });
    
    const navigate = useNavigate();

    const handleChange = e => setValue(prev => ({ ...prev, [e.target.name]: e.target.value}));


    const handleUpdate = (e) => {    
        if (firstName || lastName || email) {
            const updateEmployee = employees.map(employee => {
                if(employee.id === id) {
                    return {
                        ...employee,
                        firstName: value.firstName,
                        lastName: value.lastName,
                        email: value.email
                    }
                }

                return employee
            })

            setEmployees(updateEmployee);
        } else {
            alert('Invalid First Name or Last Name or Email');
            return
        }

        e.preventDefault();
        navigate("/")
    }

    return (
        <div className="container create">
            <h2 className="heading">Update Employee</h2>

            <Form value={value} handleChange={handleChange} handleSubmit={handleUpdate} action={"update"} />
        </div>
    );
}
 
export default UpdateEmployee;