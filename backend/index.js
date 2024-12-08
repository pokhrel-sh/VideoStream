import { MongoClient } from 'mongodb';
import express from 'express';
import cors from 'cors';

// endpoints imports
import loginRegisterRouter from './endpoints/login-register.js';


const URI = "mongodb://localhost:27017";
const mongo = new MongoClient(URI);
let database = null
let usersCollection = null

try {
    await mongo.connect();
    console.log("==================================== Mongo Database Connected ====================================");
    database = mongo.db('WebDevProjectDB');
    usersCollection = await database.collection('Users')
} catch (error) {
    throw new Error("Mongo Database Connection Failed: " + error);
}


const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json());


function giveRouterAcessToMongoCollection(collection) {
    function middleware(req,res,next) {
        req.collection = collection
        next()
    }
    return middleware;
}



app.use(("/"), giveRouterAcessToMongoCollection(usersCollection), loginRegisterRouter)




app.listen(PORT, ()=>{
    console.log(`============================= Server Running: http://localhost:${PORT} ==============================`)
})

