import {useState , useEffect} from 'react'
import {FormControl,FormGroup,InputLabel, Input,styled,Typography,Button} from '@mui/material';
import {getUser, editUser} from '../service/api';
import {useNavigate} from 'react-router-dom';
// useParams is used to get elements(id) from link url
import {useParams} from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div{
      margin-top:20px
    }
`
const defaultValue = {
  name:'',
  username:'',
  email:'',
  phone:''
}
const EditUser = () => {
  const[user,setUser] = useState(defaultValue);
// navigate is used to transfer to alluser page from adduser page after clicking on the adduser button
  const navigate = useNavigate();
//   it is used to get value of id from ulr
  const {id} = useParams();
  
  useEffect(()=>{
    // console.log("use effect is working coeectly");
      loadUserDetails();
  },[])

  const loadUserDetails= async ()=>{
     const response = await getUser(id);
     setUser(response.data);
     console.log('API response:', response.data);
  }
  
  const onValueChange = (e)=>{
    // console.log(e.target.name,e.target.value);
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

const editUserDetails = async () =>
  {
    await editUser(user,id);
    navigate('/all');
    console.log(user);
  }
  return (
    <Container>
    <Typography variant='h4'>Edit User</Typography>
    <FormControl>
      <InputLabel>Name</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
    </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
      </FormControl>
  </Container>
  )
}

export default EditUser;