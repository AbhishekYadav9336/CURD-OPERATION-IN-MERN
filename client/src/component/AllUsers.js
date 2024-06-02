import { FormControl, FormGroup ,InputLabel,Input} from '@mui/material'
import React from 'react';
import {Table,TableHead,TableBody,TableRow,TableCell, styled , Button} from '@mui/material';
import {getUsers} from '../service/api.js';
// useEffect is used to fetch data from api for mongodb
import {useEffect} from 'react';
// to store the data that come from mongodb
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from '../service/api.js';
const StyledTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`
// this style is for the head of alluser
const Thead = styled(TableRow)`
       ${'' /* six times 0 means black color */}
    background: #000000;
    ${'' /* now we have to change the color of elements in the header*/}
    &>th{
      color:#fff;
      font-size:20px;
    };
`
// now we have to increase the size of all the entity which are present in the table
const TBody = styled(TableRow)`
    &>td{
      font-size:15px;
    }
`
const AllUsers = () => {
  const [users , setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = async ()=>{
     let response=await getUsers();
    //  console.log(response.data);
     setUsers(response.data);
     
  }
  const  deleteUserDetail = async (id) =>{
    await deleteUser(id);
    getAllUsers();
  }
  return (
    // styledTable if also a style valiable which in not a table elemnt in mui
    <StyledTable>
     {/* <Table> */}
     {/* thead is the style variable not a part of table in mui */}
        <TableHead>
        <Thead>
        {/* <TableRow> */}
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Usename</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
          {/* </TableRow> */}
          </Thead>
        </TableHead>
       
        <TableBody >
        {
          users.map(user =>(
            <TBody key={user._id}>
            {/* <TableRow> */}
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
              <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant="contained" color="secondary" onClick={()=>deleteUserDetail(user._id)}>Delete</Button>
              </TableCell>
            {/* </TableRow> */}
            </TBody>
          ))
        }
        </TableBody>
     {/* </Table> */}
     </StyledTable>
  )
}
export default AllUsers