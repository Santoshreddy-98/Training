







import React, { useState } from 'react';
import prod from './product.css';
import Header from './Header1'
import kalam from '../images/kalam.png';
import homestyle from './Homestyle.module.css';
import CardDetails from './Software'
import { Link } from 'react-router-dom';


const Product5 =()=> {
  
  return (
    <React.Fragment>
      <Header/>
      <table width="90%" border={10} bordercolor="green">
        <tr>
          <th align='left'>Course Name</th>
          <th align='left'>Title</th>
          <th align='left'>Course Fee</th>
          <th align='left'>Duration</th>
          <th align='left'>Tools</th>
        </tr>
        {CardDetails.map((val, key) => {
          return (

            <tr key={key}>

              <td ><span style={{ color: 'red' }}>{val.name}</span></td>
              <td>{val.title}</td>
              <td>{val.price}</td>
              <td>{val.duration}</td>
              <td>{val.tools}</td>

            </tr>

          )
        })}
      </table>
      <div className={homestyle.outerBody}>
        <div className={homestyle.cardBody}>
          {
            CardDetails.map((icon, index) => {
              return (

                <div className={homestyle.container} key={index}>
                  <div className={homestyle.card}>
                    <div className={`${homestyle.face} ${homestyle.face1}`}>
                      <div className={homestyle.card_img}>
                        <img src={icon.img} />
                        <h3 style={{ "font-size": "20px" }}>{icon.title}</h3>
                      </div>
                    </div>
                    <div className={`${homestyle.face} ${homestyle.face2}`}>
                      <div className={homestyle.content}>
                        <p>Comes Under:{icon.name}<br />Tools Need:{icon.tools}<br />Duration:{icon.duration}<br />Price:{icon.price}</p>
                        <Link to='syllabus'>View</Link>
                      </div>

                    </div>
                  </div>




                </div>
              )
            })
          }
        </div>
      </div>




    </React.Fragment>
  );
}
export default Product5


