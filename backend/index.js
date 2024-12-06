import { addUser} from "./database-related/manageUsers.js";


import { MongoClient } from 'mongodb';
const URI = "mongodb://localhost:27017";
const mongo = new MongoClient(URI);

let database = null
let collection = null

try {
    await mongo.connect();
    console.log("==================================== Mongo Database Connected ====================================");
    database = mongo.db('WebDevProjectDB');
    collection = await database.collection('Users')
} catch (error) {
    throw new Error("Mongo Database Connection Failed: " + error);
}



const user = {
    "username": "john_doe90",
    "password": "jDoePass789!",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "date_of_birth": "10/11/1990",
    "followers": 89,
    "last_room_joined": 729832,
    "account_bio": "Just another guy sharing his thoughts."
}

addUser(collection, user)
