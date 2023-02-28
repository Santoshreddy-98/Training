import React from 'react'
import enroll from './Enroll.module.css';
//import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Enroll() {
    let navigate = useNavigate();
    const addScreen = () => {
    navigate("/payment");
    }
    return (
        <div>
            {/* <Outlet /> */}
            <div className={enroll.wrapper}>
                <div className={enroll.title}>
                    Enrollment Form
                </div>
                <div className={enroll.form}>
                    <div className={enroll.inputfield}>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" className={enroll.input}/>
                    </div>
                    <div className={enroll.inputfield}>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" className={enroll.input}/>
                    </div>
                    <div className={enroll.inputfield}>
                        <label>Email Address</label>
                        <input type="text" placeholder="Email Address" className={enroll.input}/>
                    </div>
                    <div className={enroll.inputfield}>
                        <label>Password</label>
                        <input type="password" placeholder="Password" className={enroll.input}/>
                    </div>

                    <div className={enroll.inputfield}>
                        <label>Selected Course</label>
                        <div className={enroll.custom_select}>
                            <select>
                                <option value="">Select</option>
                                <option value="male">Java</option>
                                <option value="female">Python</option>
                            </select>
                        </div>
                    </div>

                    <div className={enroll.inputfield}>
                        <label>Reference ID</label>
                        <input type="text" placeholder="Reference ID" className={enroll.input}/>
                    </div>


                    <div className={enroll.inputfield}>
                        <input type="submit" onClick={addScreen} value="Continue for payment" className={enroll.btn}/>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Enroll
