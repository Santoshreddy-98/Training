import React, { useState, useEffect } from 'react';
import './App.css';

// ***** Import Router and Route
import { Routes, Route} from 'react-router-dom'


// ***** Importer Components
import Studenlogin from './components/Studenlogin';
import Signup from './components/StudentSignup';
import Homepage from './components/Homepage';
//import Content from './components/Content';
import Enroll from './components/Enroll';
import Payment from './components/payment';
//import Syllabus1 from './components/syllabus';
import Python from './components/Python'
import MernContent from './components/MernContent';
import Meanstack from './components/Meanstack';
import Java from './components/Java';
import Aws from './components/Aws';
import DataAnalysis from './components/DataAnalysis';
import Networking from './components/Networking';
import Product from './components/Product';
import Reactjs from './components/Reactjs';
import Node from './components/Node';
import Devops from './components/Devops';
import Embedded from './components/Embedded';
import Vlsi from './components/Vlsi';
import Forget from './components/Forget';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Product5 from './components/Product5';
import Bootstrapreact from './components/Bootstrapreact';

function App() {

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const getValue = (contact) =>{ // getting value from child to parent
    setContacts([...contacts, contact]);
  }

  // Grab value from the local storage
  useEffect(() => {
    const variable1 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(variable1)setContacts(variable1)
    // console.log(contacts)
    
  },[]);

  //Store value into the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    
  },[contacts])


  
  return (
    // className="App"
    
    <Routes>

        <Route path='/' element={<Homepage />}/>
        <Route path='login' element={<Studenlogin />}/>
        <Route path='signup' element={<Signup getValue = {getValue}/>}/>
        <Route path='Mernstack' element = {<MernContent />} />
        <Route path='products' element = {<Product/>} />
         <Route path='enroll' element={<Enroll  /> } />
        <Route path='payment' element={<Payment />} />
        <Route path='Python' element={<Python />} />

        <Route path='Java' element={<Java />} />
        <Route path='Meanstack'  element={<Meanstack/>} />
        <Route path='Aws' element = {<Aws />} />
        <Route path='DataAnalysis' element= {<DataAnalysis/>} />

        <Route path='Node' element= {<Node/>} />

        <Route path='Networking' element= {<Networking/>} />
        <Route path='React' element= {<Reactjs/>} />

        <Route path='Devops' element={<Devops />} />
        <Route path='Embedded' element={<Embedded />} />
        <Route path='Vlsi' element={<Vlsi />} />
        <Route path='Forget' element={<Forget />} />
        <Route path='product1' element={<Product1 />} />
        <Route path='product2' element={<Product2 />} />
        <Route path='product3' element={<Product3 />} />
        <Route path='product4' element={<Product4 />} />
        <Route path='product5' element={<Product5 />} />


        <Route path="/veera" element={<Bootstrapreact/>}/>


    </Routes>
    
  );
}

export default App;