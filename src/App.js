import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  // console.log('we are about to list the employee');
  const [role, setRole]= useState('dev');
  const showEmployee= true;
  return (
    <div className="App bg-red-300">
      {showEmployee?
      <>
      <input type='text' onChange={(e)=>{
         console.log(e.target.value);
         setRole(e.target.value);
      }} 
      />
        <Employee name='Keshav' role='intern'/>
        <Employee name='Vinay'role={role}/>
        <Employee name= 'Rahul'/>
        <Employee name='Lakshay'/>
        <Employee name='Kashish'/>
      
      </>:
      <p>
        YOU CANNOT SEE ALL THE EMPLOYEES
      </p>}
    </div>
  );
}

export default App;
