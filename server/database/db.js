
import mongoose from "mongoose"
const Connection=  ()=>{
    const URL='mongodb://127.0.0.1:27017/user';
     try{
        // mongoose.connect ---it is used to connect your project from mongodb it take two argument (url,object)
           mongoose.connect(URL);
        console.log('data base connected sucessfully');
        }catch(error)
     {
        console.log('Error while connecting with the data base',error);
     }
}
export default Connection;
