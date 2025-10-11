import React, { useEffect, useState } from 'react'
import Employee from './Employees'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Dashboard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recdel, setrecdel] = useState('');
  const [formdata, setformdata] = useState([])
  console.log(formdata)


  const fetchEmployee = () => {
    axios.get('http://localhost:8080/api/employees')
      .then((res) => setformdata(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  const handledelete = async (del) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/employees/${del}`)
      toast.success('Employee data deleted');
      fetchEmployee()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='main-content'>
        <div className=' overflow-auto'>
          <h3 className='fw-bold mb-4 border-bottom pb-3'>Employee Details</h3>

          <Table striped className='' >
            <thead>
              <tr>
                <th>EMP_ID</th>
                <th>NAME</th>
                <th>CONTACT NO</th>
                <th>EMAIL</th>
                <th>DEPT</th>
                <th>JOIN DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {
                formdata?.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>{val.emp_id}</td>
                      <td>{val.first_name} {val.last_name}</td>
                      <td>{val.phone}</td>
                      <td>{val.email}</td>
                      <td>{val.department}</td>
                      <td>{new Date(val.join_date).toLocaleDateString('en-GB')}</td>
                      <td className='fs-4'><MdDelete onClick={() => { handleShow(); setrecdel(val.emp_id) }} /> <FaUserEdit /></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation </Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete it ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={()=>{handleClose(); handledelete(recdel)}}>
              Yes, delete it!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Dashboard