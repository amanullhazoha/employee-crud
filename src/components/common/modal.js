import Button from "./button";

const Modal = ({ handleToggler, handleDelete, id }) => {
    return (
        <div className="modal">
            <div className="modalContainer">
                <h3>Are you sure, you want to delete this employee?</h3>
                
                <Button onClick={() => handleDelete(id)}>Yes</Button>
                <Button onClick={() => handleToggler("")}>No</Button>
            </div>
        </div>
    );
}
 
export default Modal;