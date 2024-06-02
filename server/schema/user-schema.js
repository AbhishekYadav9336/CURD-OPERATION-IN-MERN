// import mongoose from "mongoose";
// const counterSchema = mongoose.Schema({
//   _id: { type: String, required: true },
//   seq: { type: Number, default: 0 },
// });
// const Counter = mongoose.model("Counter", counterSchema);

// const userSchema = mongoose.Schema({
//   userId: { type: Number, unique: true },
//   name: String,
//   username: String,
//   email: String,
//   phone: String,
// });

// userSchema.pre("save", function (next) {
//   const doc = this;
//   Counter.findByIdAndUpdate(
//     { _id: "userId" },
//     { $inc: { seq: 1 } },
//     { new: true, upsert: true }
//   )
//     .then(function (counter) {
//       doc.userId = counter.seq;
//       next();
//     })
//     .catch(function (error) {
//       return next(error);
//     });
// });

// const postUser = mongoose.model("user", userSchema);

// export default postUser;

import mongoose from 'mongoose'
const userSchema= mongoose.Schema({
    name:{
        type:String ,
        required :true
    },
    username:{
        type:String ,
        required :true,
        // unique:true
    },
    email:{
        type:String ,
        required :true,
    },
    phone:{
        type:String ,
        required :true
    }    
})
const user=mongoose.model("user",userSchema)
export default user;
