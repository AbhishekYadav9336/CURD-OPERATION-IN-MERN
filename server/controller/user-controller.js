import User from '../schema/user-schema.js';
export const addUser = async (request,response)=>{
    // console.log(request.body);
    const user = request.body;
    const newUser = new User(user);
    console.log(request.body);
    try{
       await newUser.save();
        return response.status(201).json(newUser);
    }catch(error){
         return response.status(409).json({message:error.message});
    }
    // console.log(User);    
}
export const getUsers= async (request,response)=>{
      try{
        const users = await User.find({});
        // to send it on frontend.
        response.status(200).json(users);
      }
      catch(error)
      {
        response.status(404).json({message:error.message});
      }
}
export const getUser = async (request,response)=>{
  
  try{
    // const user = await User.find({_id:request.params.id});
    const user = await User.findById(request.params.id);
    // to send it on frontend.
    response.status(200).json(user);
  }
  catch(error)
  {
    response.status(404).json({message:error.message});
  }
}

export const editUser = async (request, response) => {
  const user = request.body;
  try {
    const updatedUser = await User.updateOne({ _id: request.params.id }, user);
    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
// export const editUser = async(request, response) =>{
//   let user =request.body;
//   const editUser = new User(user);
//   try {
//     await user.updateOne({_id:request.params.id},editUser);
//     response.status(201).json(editUser);
//   } catch (error) {
//       response.status(409).json({message: error.message});
//   }
// }
export const deleteUser  = async (request,response) =>{
    try {
         await User.deleteOne({_id:request.params.id});
         response.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        response.status(409).json({message:error.message});
    }
}
