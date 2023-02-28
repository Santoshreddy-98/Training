import React from 'react';
import prod from './product.css';
import Header from './Header1'
import kalam from '../images/kalam.png';
import homestyle from './Homestyle.module.css';
import CardDetails from './Cyber'

const Product4=()=> {
  return (
    <React.Fragment>
      <Header />
      <table width="90%" border={10} bordercolor="green">
        <tr>
          <th align='left'>Course Name</th>
          
          <th align='left'>Duration</th>
          <th align='left'>Course Fee</th>
         
        </tr>
        {CardDetails.map((val, key) => {
          return (

            <tr key={key}>

              <td ><span style={{ color: 'red' }}>{val.courseName}</span></td>
              <td>{val.courseDuration}</td>
              <td>{val.Fee}</td>
              

            </tr>

          )
        })}
      </table>




    </React.Fragment>
  );
}
export default Product4



