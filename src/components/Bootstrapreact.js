import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EmbeddedDetails from './EmbeddedDetails';
import Header from './Header';
import "../bstyles.css"
import { Link } from 'react-router-dom';
const Bootstrapreact = () => {
    return (
        <div>

            <div style={{ height: '5rem' }}>
                <Header/>
            </div>
            <div>
               <center><h1 className='cdiv' style={{padding:"10px",marginBottom:"40px"}}>Embedded System</h1></center>
            </div>
            <div>
                {
                    EmbeddedDetails.length > 0 ? <div  style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"0px auto", height: "auto",width:"95%" }}>
                        {
                            EmbeddedDetails.map((item, index) => <div style={{marginBottom:"20px"}} key={index}>
                                <Card className='carddiv'>
                                    <img style={{ borderRadius: "20px", padding: "10px", width: "16rem", height: "16rem" }} variant="top" src={item.page} />
                                    <Card.Body>
                                        <Card.Title>{item.CourseName}</Card.Title>
                                        <Card.Text>
                                            <span style={{ fontWeight: "500" }}>Course Duration:</span> {item.CourseDuration}
                                        </Card.Text>
                                        <Card.Text>
                                            <span style={{ fontWeight: "500" }}>Fee:</span>${item.Fee}
                                        </Card.Text>
                                        <Link style={{textDecoration:"none"}} to="/login"> <Button variant="primary">Join Now  </Button></Link>
                                    </Card.Body>
                                </Card>
                            </div>)
                        }
                    </div> : <p></p>
                }
            </div>
        </div>
    )
}


export default Bootstrapreact