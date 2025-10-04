import Table from 'react-bootstrap/Table';
import { SiTicktick } from "react-icons/si";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';

const Attendance = () => {

    return (
        <div className="main-content text-bold" >
            <div className='' >
                <div className='d-flex justify-content-between mb-4' >
                    <h3 className="fw-bold" >Attendance (Admin)</h3>
                    <Button variant="primary" >Primary</Button>
                </div>
                <div className='p-[100px]' style={{backgroundColor:'gray'}} ></div>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Employee</th>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{fontSize:"14px"}}>{index}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{display:'flex',paddingBottom:"15px", paddingTop:"15px" }}>Ankit</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{paddingBottom:"15px", paddingTop:"15px" }} ><SiTicktick size={10} className='text-success' /></td>
                        ))}
                    </tr>
                    <tr>
                        <td style={{display:'flex',paddingBottom:"15px", paddingTop:"15px" }} className='' >Kamya</td>  
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{paddingBottom:"15px", paddingTop:"15px" }} >
                                {
                                    index % 2 === 0 ?
                                        <SiTicktick size={10} className="text-success" />
                                        :
                                        <IoCloseCircleOutline size={12} className="text-danger" />
                                }
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td style={{display:'flex',paddingBottom:"15px", paddingTop:"15px" }}>Aman</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{paddingBottom:"15px", paddingTop:"15px" }} ><SiTicktick size={10} className='text-success' /></td>
                        ))}
                    </tr>
                    <tr>
                        <td style={{display:'flex',paddingBottom:"15px", paddingTop:"15px" }}>Naresh</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{paddingBottom:"15px", paddingTop:"15px" }} ><SiTicktick size={10} className='text-success' /></td>
                        ))}
                    </tr>
                    <tr>
                        <td style={{display:'flex',paddingBottom:"15px", paddingTop:"15px" }}>Radha</td>
                        {Array.from({ length: 31 }).map((_, index) => (
                            <td key={index} style={{paddingBottom:"15px", paddingTop:"15px" }} ><SiTicktick size={10} className='text-success' /></td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Attendance