import mongoose from "mongoose";
mongoose.connect("mongodb+srv://admin_test:password_test@cluster92221.4bbnaba.mongodb.net/tuiter?retryWrites=true&w=majority").then(
    () => { 
       console.log("Connected to DB!");
   },
    err => { 
      console.log(err);
   }
  );