import React from 'react'
import Employee from './Employees'
import Table from 'react-bootstrap/Table';
function Dashboard() {
  return (
    <>
        <div className='main-content'>
            <div className=' overflow-auto'>
              <h3 className='fw-bold mb-4 border-bottom pb-3'>Employee Details</h3>

              <Table striped  className='' >
                <thead>
                  <tr>
                    <th>EMP_ID</th>
                    <th>NAME</th>
                    <th>CONTACT NO</th>
                    <th>DEPT</th>
                    <th>JOIN DATE</th>
                  </tr>
                </thead>

                <tbody>
                    <tr>
                      <td>EMP001</td>
                      <td>Naresh Kumar</td>
                      <td>9876543210</td>
                      <td>HR</td>
                      <td>2022-01-15</td>
                    </tr>
                    <tr>
                      <td>EMP002</td>
                      <td>Priya Sharma</td>
                      <td>9123456780</td>
                      <td>Finance</td>
                      <td>2021-11-20</td>
                    </tr>
                    <tr>
                      <td>EMP003</td>
                      <td>Rohit Verma</td>
                      <td>9988776655</td>
                      <td>IT</td>
                      <td>2020-05-12</td>
                    </tr>
                    <tr>
                      <td>EMP004</td>
                      <td>Anjali Singh</td>
                      <td>9090909090</td>
                      <td>Marketing</td>
                      <td>2023-03-10</td>
                    </tr>
                    <tr>
                      <td>EMP005</td>
                      <td>Amit Patel</td>
                      <td>8787878787</td>
                      <td>Sales</td>
                      <td>2021-07-01</td>
                    </tr>
                    <tr>
                      <td>EMP006</td>
                      <td>Neha Gupta</td>
                      <td>9595959595</td>
                      <td>Admin</td>
                      <td>2022-09-25</td>
                    </tr>
                    <tr>
                      <td>EMP007</td>
                      <td>Vikram Mehta</td>
                      <td>9898989898</td>
                      <td>Operations</td>
                      <td>2019-12-05</td>
                    </tr>
                    <tr>
                      <td>EMP008</td>
                      <td>Sneha Reddy</td>
                      <td>9797979797</td>
                      <td>IT</td>
                      <td>2020-08-19</td>
                    </tr>
                    <tr>
                      <td>EMP009</td>
                      <td>Arjun Malhotra</td>
                      <td>9696969696</td>
                      <td>Finance</td>
                      <td>2021-04-30</td>
                    </tr>
                    <tr>
                      <td>EMP010</td>
                      <td>Kavya Iyer</td>
                      <td>9494949494</td>
                      <td>HR</td>
                      <td>2022-06-15</td>
                    </tr>
                </tbody>
              </Table>
            </div>            
        </div>
    </>
  )
}

export default Dashboard