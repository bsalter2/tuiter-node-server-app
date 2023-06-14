import express from 'express'
import session from "express-session";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";

const app = express()
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://a5--stalwart-phoenix-74ac4b.netlify.app"]
    })
);

app.use(express.json())
HelloController(app)
UserController(app)
TuitsController(app);
AuthController(app);

const port = process.env.PORT || 4000;
app.listen(port)

mongoose.connect("mongodb+srv://admin_test:password_test@cluster92221.4bbnaba.mongodb.net/tuiter?retryWrites=true&w=majority").then(
    () => { 
       console.log("Connected to DB!");
   },
    err => { 
      console.log(err);
   }
  );

