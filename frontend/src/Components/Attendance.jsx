import Table from 'react-bootstrap/Table';
import { SiTicktick } from "react-icons/si";
import { IoCloseCircleOutline } from "react-icons/io5";

const Attendance = () => {

    return (
        <div className="main-content text-bold" >
            <h1 className="fw-bold" >Attendance (Admin)</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Employee</th>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index}>{index}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joan Dyer</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index}><SiTicktick size={10} className='text-success' /></td>
                        ))}
                    </tr>

                    <tr>
                        <td>Ryan Randall</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index}>
                                {
                                    index % 2 === 0 ? 
                                    <SiTicktick size={10} className="text-success" /> 
                                    :
                                    <IoCloseCircleOutline size={10} className="text-danger" /> 
                                }
                            </td>
                        ))}
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default Attendance