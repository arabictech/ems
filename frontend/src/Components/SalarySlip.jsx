import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SendIcon from '@mui/icons-material/Send';
import { BsFillSendFill } from "react-icons/bs";


export const SalarySlip = () => {
  return (
    <div className="main-content">
      <h1 className="mb-3">Salary Slip</h1>
    
      <div className="salary-container">

        <Container className="" >
          <Row style={{ backgroundColor: 'white', padding: '10px', color: 'black' }} >
            <h5>SalarySlip: date</h5>
            <hr />
            <Col lg={6} md={6} style={{ padding: '10px' }} >
              <div style={{ marginBottom: '20px' }}>
                <h6 style={{ paddingBottom: '10px' }}>From:</h6>
                <div className="fw-bold">ABC Pvt Ltd</div>
                <div >123, Main Street</div>
                <div >City, State, ZIP</div>
                <div >Email: abs@gmail.com</div>
                <div >Phone: +91 xxxxxxxxxx</div>
              </div>
              <Table striped bordered hover style={{ marginBottom: '30px' }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Earrings</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Basic Salary</td>
                    <td>5000</td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td>house rent allowance(H.R.A)</td>
                    <td>7000</td>

                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Conveyance</td>
                    <td>10000</td>

                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end">SubTotal</td>
                    <td>22000</td>
                  </tr>
                </tbody>
              </Table>


            </Col>
            <Col lg={6} md={6} style={{ padding: '10px' }} >
              <div style={{ marginBottom: '20px' }}>
                <h6 style={{ paddingBottom: '10px' }}>To:</h6>
                <div className="fw-bold">John Doe</div>
                <div style={{}}>Web developer</div>
                <div style={{}}>Employee ID: 0008</div>
                <div style={{}}>Joining Date: 4/10/25</div>
                <div style={{}}>Phone: +91 xxxxxxxxxx</div>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Deducations</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tax Deducted at Source (T.D.S.)</td>
                    <td>40000</td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Provident Fund</td>
                    <td>10000</td>

                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ESI</td>
                    <td>9000</td>

                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end">SubTotal</td>
                    <td>22000</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end">(ER) - (DE)</td>
                    <td>22000</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end">Total</td>
                    <td>22000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <div style={{ fontSize: '12px', color: 'gray', marginBottom:'20px'}}>
          <h6>Terms & Condition</h6>
          <span >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</span>
          <Button variant="secondary" className="d-flex gap-2 align-items-center" style={{ float: 'right'}}><BsFillSendFill /> Send Innvoice </Button>
          <Button className="d-flex gap-2 align-items-center" style={{ float: 'right', backgroundColor: '#4c3575', marginRight: '10px'}}> <LocalPrintshopIcon/> Print</Button>
          
        </div>
    
      </div>
    </div>

  );
};
