const Form = ({ handleSubmit, handleChange, value, action }) => {
    const { firstName, lastName, email } = value;

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="input">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" value={firstName} name="firstName" placeholder="Write here" onChange={handleChange} />
            </div>
            
            <div className="input">
                <label htmlFor="lastName">First name</label>
                <input type="text" id="lastName" value={lastName} name="lastName" placeholder="Write here" onChange={handleChange} />
            </div>

            <div className="input">
                <label htmlFor="email">First name</label>
                <input type="email" id="email" value={email} name="email" placeholder="Email address here" onChange={handleChange} />
            </div>
            
            <button type="submit">{action === "create" ? "Submit" : "Update"}</button>
        </form>
    );
}
 
export default Form;