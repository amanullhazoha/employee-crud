import TableHead from "./tableHead";
import TableBody from "./tableBody";

const Table = ({ columns, items }) => {
    return (
        <table className="table">
            <TableHead
                columns={columns}
            />
            <TableBody items={items} columns={columns} />
        </table>
    );
}
 
export default Table;