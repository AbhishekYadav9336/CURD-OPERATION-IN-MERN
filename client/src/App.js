import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';
import AllUsers from './component/AllUsers';
import Home from './component/Home';
import EditUser from './component/EditUser';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
     <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all" element={<AllUsers></AllUsers>}/>
        <Route path="/add" element={ <AddUser></AddUser>}/>
        {/* this line is for editing ---edit/:id ---- is used for uniquily identify particular */}
        <Route path='/edit/:id' element={ <EditUser/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
