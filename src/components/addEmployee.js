import shortId from 'shortid';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Form from './common/form';

const AddEmployee = ({ setEmployees }) => {
    const [value, setValue] = useState({ firstName: "", lastName: "", email: "" });
    const { firstName, lastName, email } = value;
    
    const navigate = useNavigate();

    const handleChange = e => setValue(prev => ({ ...prev, [e.target.name]: e.target.value}));


    const handleSubmit = (e) => {    
        if (firstName && lastName && email) {
            setEmployees(prev => ([{ ...value, id: shortId.generate() }, ...prev]));
        } else {
            alert('Invalid First Name or Last Name or Email');
            e.preventDefault();
            return
        }

        e.preventDefault();
        navigate("/")
    }

    return (
        <div className="container create">
            <h2 className="heading">Add Employee</h2>

            <Form value={value} handleChange={handleChange} handleSubmit={handleSubmit} action={"create"} />
        </div>
    );
}
 
export default AddEmployee;