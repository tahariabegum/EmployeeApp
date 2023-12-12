import { Fragment, useEffect, useState } from 'react'
import EmployeeList from './components /EmployeeList';
import Employee from './pages/Employee';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import "./App.css"

import Form from './components /Form';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let userList = await fetch("https://reqres.in/api/users?page=2")
        userList = await userList.json();
        setUsers(userList.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    getData();

  }, [])

  function removeFunction() {

    setShowRemove(!showRemove);
  }


  return (
    <div className='all-holder'>
      <Routes>
        <Route path='/' element = {<EmployeeList users = {users}/>} />
        <Route path='/employee/:employee' element = {<Employee />}/>
      </Routes>
    </div>
  ) 
}

export default App