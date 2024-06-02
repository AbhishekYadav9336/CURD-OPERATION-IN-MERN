import axios from "axios";
// import user from '..src/component/EditUser.js';
const URL= 'http://localhost:8000';
export const addUser = async (data)=>{
      try{
       return await axios.post(`${URL}/add`,data);

      }catch(error)
      {
        console.log('error while calling addUser Api',error);
      }
}
export const getUsers = async () =>{
  try {
      return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log('error while calling getuser API',error)
  }
}
export const getUser = async (id) =>{
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('error while callig getUser api',error);
  }
}
export const editUser = async (user,id) =>{
    try{
        return await axios.put(`${URL}/${id}`,user);
    } catch(error)
    {
        console.log('error while calling editUser api',error);
    }
}
// export const deleteUser = async (id) => {
//   try {
//     const response = await axios.delete(`/api/users/${id}`);
//     return response.data; // Return data on successful delete
//   } catch (error) {
//     console.error('Error while calling deleteUser API', error);
//     throw error; // Rethrow the error for the caller to handle
//   }
// }


export const deleteUser = async (id) =>{
  try {
       return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling deleteUser api',error);
  }
}
